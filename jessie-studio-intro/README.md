# Meet Jessie Studio — TED-Talk Intro Video

Faceless, TED-stage channel intro built from your timeline + script.

## Output

- **Video:** [`output/meet-jessie-studio.mp4`](output/meet-jessie-studio.mp4)
- **Preview page:** open `index.html` after building
- **Timeline metadata:** `output/timeline.json`

## Concept locked in

- Single warm spotlight, two stools, large backdrop screen
- Jessie stays silhouette / hands / back-to-camera
- Interviewer questions as spoken VO + on-screen text
- Backdrop swaps per beat (title → Big Four → map → INTJ → doomscroll → builds → CTA)
- Doomscrolling beat lingers after dialogue before the tonal turn

## Rebuild

```bash
cd jessie-studio-intro
python3 scripts/build_video.py
```

Requires `ffmpeg`, `ffprobe`, and the PNGs under `assets/` + MP3s under `audio/`.

### Swap in your real voice

Replace any of:

- `audio/q1.mp3` … `audio/q7.mp3` (interviewer)
- `audio/a1.mp3` … `audio/a7.mp3` (Jessie)

Then re-run the build script. Scene lengths follow the audio durations.

### Regenerate placeholder TTS

```bash
export PATH="$HOME/.local/bin:$PATH"
# example
edge-tts --voice en-US-AriaNeural --rate="-8%" --write-media audio/a1.mp3 \
  --text "Hi, I'm Jessie — this is Jessie Studio..."
```

## Production notes (from your brief)

1. Shoot doomscrolling phone footage first — it is the emotional core and reusable B-roll.
2. Side/back light Jessie so silhouette reads intentional (not blur bars).
3. Recurring cold-open silhouette can become the channel signature.
4. Keep “let’s figure this out together” as the recurring sign-off.
