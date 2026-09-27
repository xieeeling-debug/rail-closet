#!/usr/bin/env python3
"""Compose the Meet Jessie Studio TED-talk intro video from assets + TTS."""

from __future__ import annotations

import json
import math
import subprocess
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
AUDIO = ROOT / "audio"
WORK = ROOT / "frames" / "work"
DIST = ROOT / "dist"
W, H, FPS = 1920, 1080, 30
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"


def run(cmd: list[str]) -> None:
    print("+", " ".join(cmd[:8]), "..." if len(cmd) > 8 else "")
    subprocess.run(cmd, check=True)


def probe_duration(path: Path) -> float:
    out = subprocess.check_output(
        [
            "ffprobe",
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "csv=p=0",
            str(path),
        ],
        text=True,
    ).strip()
    return float(out)


def esc_drawtext(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace(":", "\\:")
        .replace("'", "\\'")
        .replace("%", "\\%")
    )


def make_clip(
    image: Path,
    duration: float,
    out: Path,
    *,
    zoom_end: float = 1.08,
    question: str | None = None,
    label: str | None = None,
    vignette: bool = True,
) -> Path:
    frames = max(1, int(round(duration * FPS)))
    # Slow Ken Burns push-in
    z_expr = f"min(zoom+{(zoom_end - 1) / max(frames - 1, 1):.8f}\\,{zoom_end})"
    vf_parts = [
        f"scale={W}:{H}:force_original_aspect_ratio=increase",
        f"crop={W}:{H}",
        f"zoompan=z='if(eq(on\\,1)\\,1\\,{z_expr})':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s={W}x{H}:fps={FPS}",
    ]
    if vignette:
        vf_parts.append("vignette=PI/5")
    if question:
        wrapped = "\\n".join(textwrap.wrap(question, width=42))
        q = esc_drawtext(wrapped)
        vf_parts.append(
            "drawbox=x=80:y=h-220:w=min(iw-160\\,1200):h=140:color=black@0.55:t=fill"
        )
        vf_parts.append(
            f"drawtext=fontfile={FONT}:text='{q}':fontcolor=0xF5E6C8:fontsize=36:"
            f"x=110:y=h-190:line_spacing=12"
        )
    if label:
        lab = esc_drawtext(label)
        vf_parts.append(
            f"drawtext=fontfile={FONT}:text='{lab}':fontcolor=0xD4A574@0.9:fontsize=28:"
            f"x=80:y=70"
        )
    vf = ",".join(vf_parts)
    run(
        [
            "ffmpeg",
            "-y",
            "-loop",
            "1",
            "-i",
            str(image),
            "-vf",
            vf,
            "-t",
            f"{duration:.3f}",
            "-r",
            str(FPS),
            "-pix_fmt",
            "yuv420p",
            "-c:v",
            "libx264",
            "-preset",
            "veryfast",
            "-crf",
            "20",
            "-an",
            str(out),
        ]
    )
    return out


def concat_clips(clips: list[Path], out: Path) -> Path:
    list_file = WORK / "concat.txt"
    list_file.write_text("".join(f"file '{c.resolve()}'\n" for c in clips))
    run(
        [
            "ffmpeg",
            "-y",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(list_file),
            "-c",
            "copy",
            str(out),
        ]
    )
    return out


def build_audio_timeline(segments: list[tuple[float, Path | None]], out: Path) -> Path:
    """segments: (duration, audio_path_or_None for silence)."""
    inputs: list[str] = []
    filters: list[str] = []
    labels: list[str] = []
    idx = 0
    for dur, path in segments:
        if path is None:
            inputs += ["-f", "lavfi", "-t", f"{dur:.3f}", "-i", "anullsrc=r=44100:cl=mono"]
            filters.append(f"[{idx}:a]atrim=0:{dur:.3f},asetpts=PTS-STARTPTS[a{idx}]")
        else:
            inputs += ["-i", str(path)]
            # pad each clip to exact segment duration
            filters.append(
                f"[{idx}:a]aformat=sample_rates=44100:channel_layouts=mono,"
                f"apad=whole_dur={dur:.3f},atrim=0:{dur:.3f},asetpts=PTS-STARTPTS[a{idx}]"
            )
        labels.append(f"[a{idx}]")
        idx += 1
    filt = ";".join(filters) + f";{''.join(labels)}concat=n={idx}:v=0:a=1[aout]"
    run(
        [
            "ffmpeg",
            "-y",
            *inputs,
            "-filter_complex",
            filt,
            "-map",
            "[aout]",
            "-c:a",
            "aac",
            "-b:a",
            "192k",
            str(out),
        ]
    )
    return out


def soft_ambient(duration: float, out: Path) -> Path:
    # Very quiet warm drone under the interview
    run(
        [
            "ffmpeg",
            "-y",
            "-f",
            "lavfi",
            "-i",
            f"sine=frequency=110:sample_rate=44100:duration={duration:.3f}",
            "-f",
            "lavfi",
            "-i",
            f"sine=frequency=164.81:sample_rate=44100:duration={duration:.3f}",
            "-filter_complex",
            "[0][1]amix=inputs=2,volume=0.035,afade=t=in:st=0:d=2,afade=t=out:st="
            f"{max(duration - 3, 0):.3f}:d=3",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            str(out),
        ]
    )
    return out


def main() -> None:
    WORK.mkdir(parents=True, exist_ok=True)
    DIST.mkdir(parents=True, exist_ok=True)

    # Timeline beats — visual holds stretch closer to the brief while VO drives speech.
    cold = 8.0
    seats = 4.0
    linger = 5.0
    outro = 6.0
    gap_after_q = 0.45
    gap_after_a = 0.9

    q = {i: probe_duration(AUDIO / f"q{i}.mp3") for i in range(1, 8)}
    a = {i: probe_duration(AUDIO / f"a{i}.mp3") for i in range(1, 8)}

    scenes: list[dict] = [
        {
            "id": "cold",
            "image": "cold-open.png",
            "dur": cold,
            "zoom": 1.05,
            "label": "MEET JESSIE STUDIO",
            "audio": None,
        },
        {
            "id": "seats",
            "image": "stage-two-shot.png",
            "dur": seats,
            "zoom": 1.06,
            "label": None,
            "audio": None,
        },
        {
            "id": "title",
            "image": "title-card.png",
            "dur": 3.0,
            "zoom": 1.04,
            "label": None,
            "audio": None,
        },
        {
            "id": "q1",
            "image": "stage-two-shot.png",
            "dur": q[1] + gap_after_q,
            "zoom": 1.04,
            "question": "So, tell us a little about yourself?",
            "audio": "q1.mp3",
        },
        {
            "id": "a1",
            "image": "hands-closeup.png",
            "dur": a[1] + gap_after_a,
            "zoom": 1.10,
            "label": "JESSIE",
            "audio": "a1.mp3",
        },
        {
            "id": "q2",
            "image": "ots-interviewer.png",
            "dur": q[2] + gap_after_q,
            "zoom": 1.05,
            "question": "What do you do when you're not filming?",
            "audio": "q2.mp3",
        },
        {
            "id": "a2a",
            "image": "big-four-desk.png",
            "dur": a[2] * 0.55,
            "zoom": 1.08,
            "label": "BY DAY",
            "audio": "a2.mp3",
            "audio_only_first": True,
        },
        {
            "id": "a2b",
            "image": "stage-two-shot.png",
            "dur": a[2] * 0.45 + gap_after_a,
            "zoom": 1.06,
            "label": None,
            "audio": None,
        },
        {
            "id": "q3",
            "image": "ots-interviewer.png",
            "dur": q[3] + gap_after_q,
            "zoom": 1.05,
            "question": "What's life like for you right now?",
            "audio": "q3.mp3",
        },
        {
            "id": "a3",
            "image": "world-map-backdrop.png",
            "dur": a[3] + gap_after_a,
            "zoom": 1.12,
            "label": "LIVING ABROAD",
            "audio": "a3.mp3",
        },
        {
            "id": "q4",
            "image": "stage-two-shot.png",
            "dur": q[4] + gap_after_q,
            "zoom": 1.05,
            "question": "You mentioned you're an INTJ — what does that feel like day to day?",
            "audio": "q4.mp3",
        },
        {
            "id": "a4a",
            "image": "brain-doodle.png",
            "dur": a[4] * 0.55,
            "zoom": 1.10,
            "label": "INTJ",
            "audio": "a4.mp3",
            "audio_only_first": True,
        },
        {
            "id": "a4b",
            "image": "planner-gag.png",
            "dur": a[4] * 0.45 + gap_after_a,
            "zoom": 1.08,
            "label": None,
            "audio": None,
        },
        {
            "id": "q5",
            "image": "ots-interviewer.png",
            "dur": q[5] + gap_after_q,
            "zoom": 1.06,
            "question": "What made you want to start this channel?",
            "audio": "q5.mp3",
        },
        {
            "id": "a5a",
            "image": "doomscroll-phone.png",
            "dur": a[5] * 0.7,
            "zoom": 1.14,
            "label": "THE HONEST ANSWER",
            "audio": "a5.mp3",
            "audio_only_first": True,
        },
        {
            "id": "a5b",
            "image": "stage-two-shot.png",
            "dur": a[5] * 0.3 + gap_after_a,
            "zoom": 1.08,
            "label": None,
            "audio": None,
        },
        {
            "id": "linger",
            "image": "doomscroll-phone.png",
            "dur": linger,
            "zoom": 1.18,
            "label": None,
            "audio": None,
        },
        {
            "id": "q6",
            "image": "stage-two-shot.png",
            "dur": q[6] + gap_after_q,
            "zoom": 1.05,
            "question": "So what's the actual plan here?",
            "audio": "q6.mp3",
        },
        {
            "id": "a6",
            "image": "build-broll.png",
            "dur": a[6] + gap_after_a,
            "zoom": 1.10,
            "label": "THE PLAN",
            "audio": "a6.mp3",
        },
        {
            "id": "q7",
            "image": "stage-two-shot.png",
            "dur": q[7] + gap_after_q,
            "zoom": 1.04,
            "question": "Anything you want to say to whoever's watching?",
            "audio": "q7.mp3",
        },
        {
            "id": "a7",
            "image": "follow-subscribe.png",
            "dur": a[7] + gap_after_a,
            "zoom": 1.06,
            "label": None,
            "audio": "a7.mp3",
        },
        {
            "id": "outro",
            "image": "outro-empty.png",
            "dur": outro,
            "zoom": 1.03,
            "label": "JESSIE STUDIO",
            "audio": None,
        },
    ]

    clips: list[Path] = []
    for i, sc in enumerate(scenes):
        img = ASSETS / sc["image"]
        if not img.exists():
            raise FileNotFoundError(img)
        clip_path = WORK / f"clip_{i:02d}_{sc['id']}.mp4"
        make_clip(
            img,
            sc["dur"],
            clip_path,
            zoom_end=sc.get("zoom", 1.08),
            question=sc.get("question"),
            label=sc.get("label"),
        )
        clips.append(clip_path)

    # Audio with multi-scene answer spans (VO covers both visual halves)
    audio_segments: list[tuple[float, Path | None]] = []
    i = 0
    while i < len(scenes):
        sc = scenes[i]
        if sc["id"] in {"a2a", "a4a", "a5a"}:
            nxt = scenes[i + 1]
            total = sc["dur"] + nxt["dur"]
            audio_segments.append((total, AUDIO / sc["audio"]))
            i += 2
            continue
        ap = AUDIO / sc["audio"] if sc.get("audio") else None
        audio_segments.append((sc["dur"], ap))
        i += 1

    video_path = WORK / "video_raw.mp4"
    concat_clips(clips, video_path)
    video_dur = probe_duration(video_path)

    voice_path = WORK / "voice.m4a"
    build_audio_timeline(audio_segments, voice_path)
    voice_dur = probe_duration(voice_path)

    # Align to the shorter of the two with a tiny pad if needed
    final_dur = max(video_dur, voice_dur)
    ambient_path = WORK / "ambient.m4a"
    soft_ambient(final_dur, ambient_path)

    mixed_audio = WORK / "mixed.m4a"
    run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(voice_path),
            "-i",
            str(ambient_path),
            "-filter_complex",
            f"[0:a]apad=whole_dur={final_dur:.3f}[v];"
            f"[1:a]apad=whole_dur={final_dur:.3f}[b];"
            f"[v][b]amix=inputs=2:duration=longest:dropout_transition=2,volume=1.2",
            "-c:a",
            "aac",
            "-b:a",
            "192k",
            str(mixed_audio),
        ]
    )

    out = DIST / "meet-jessie-studio.mp4"
    run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(video_path),
            "-i",
            str(mixed_audio),
            "-filter_complex",
            f"[0:v]tpad=stop_mode=clone:stop_duration={max(final_dur - video_dur, 0):.3f},"
            f"fade=t=in:st=0:d=1.2,fade=t=out:st={max(final_dur - 2.5, 0):.3f}:d=2.5[v]",
            "-map",
            "[v]",
            "-map",
            "1:a",
            "-c:v",
            "libx264",
            "-preset",
            "medium",
            "-crf",
            "22",
            "-c:a",
            "aac",
            "-b:a",
            "160k",
            "-shortest",
            "-movflags",
            "+faststart",
            str(out),
        ]
    )

    # Publish outside repo-root `dist` gitignore
    publish = ROOT / "output"
    publish.mkdir(parents=True, exist_ok=True)
    publish_mp4 = publish / "meet-jessie-studio.mp4"
    publish_mp4.write_bytes(out.read_bytes())

    meta = {
        "output": str(publish_mp4),
        "duration_sec": probe_duration(publish_mp4),
        "scenes": [
            {"id": s["id"], "image": s["image"], "dur": round(s["dur"], 3)} for s in scenes
        ],
        "total_planned_sec": round(sum(s["dur"] for s in scenes), 3),
    }
    (publish / "timeline.json").write_text(json.dumps(meta, indent=2))
    (DIST / "timeline.json").write_text(json.dumps(meta, indent=2))
    print(json.dumps(meta, indent=2))
    print(f"Wrote {publish_mp4}")


if __name__ == "__main__":
    main()
