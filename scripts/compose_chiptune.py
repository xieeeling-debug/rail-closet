#!/usr/bin/env python3
"""Compose an original NES-style 4-channel overworld loop."""

from __future__ import annotations

import math
import struct
import wave
from pathlib import Path

SAMPLE_RATE = 22050
BPM = 150
# 16th-note length in samples
SIXTEENTH = int(SAMPLE_RATE * 60 / BPM / 4)

NOTE = {
    "G2": 43,
    "A2": 45,
    "B2": 47,
    "C3": 48,
    "D3": 50,
    "E3": 52,
    "F3": 53,
    "G3": 55,
    "B3": 59,
    "C4": 60,
    "D4": 62,
    "E4": 64,
    "F4": 65,
    "G4": 67,
    "A4": 69,
    "B4": 71,
    "C5": 72,
    "D5": 74,
    "E5": 76,
    "F5": 77,
    "Fs5": 78,
    "G5": 79,
    "A5": 81,
    "B5": 83,
    "C6": 84,
    "D6": 86,
    "E6": 88,
}


def midi_hz(n: int) -> float:
    return 440.0 * (2 ** ((n - 69) / 12))


def note(name: str | None, sixteenths: int) -> tuple[int | None, int]:
    return (None if name is None else NOTE[name], sixteenths)


# Original overworld: bright G-major walk theme, 16 bars.
# Pulse 1 lead
LEAD = [
    note("G5", 2), note("G5", 2), note("B5", 4), note("A5", 4), note("G5", 4),
    note("E5", 4), note("D5", 4), note("C5", 4), note("B4", 4),
    note("G5", 2), note("A5", 2), note("B5", 4), note("D6", 4), note("C6", 4),
    note("B5", 4), note("A5", 4), note("G5", 8),
    note("B5", 2), note("B5", 2), note("C6", 4), note("B5", 4), note("A5", 4),
    note("G5", 4), note("E5", 4), note("D5", 4), note("C5", 4),
    note("B4", 2), note("C5", 2), note("D5", 4), note("E5", 4), note("D5", 4),
    note("C5", 4), note("B4", 4), note("G4", 8),
    # B
    note("D6", 4), note("B5", 4), note("A5", 4), note("G5", 4),
    note("C6", 2), note("B5", 2), note("A5", 4), note("G5", 8),
    note("A5", 4), note("B5", 4), note("C6", 4), note("D6", 4),
    note("E6", 8), note("D6", 8),
    note("B5", 2), note("C6", 2), note("D6", 4), note("C6", 4), note("B5", 4),
    note("A5", 4), note("G5", 4), note("E5", 4), note("D5", 4),
    note("C5", 2), note("D5", 2), note("E5", 4), note("G5", 4), note("E5", 4),
    note("D5", 4), note("B4", 4), note("G4", 8),
]

# Pulse 2 harmony, quieter thirds/sixths
HARM = [
    note("B4", 4), note("D5", 4), note("G5", 4), note("D5", 4),
    note("C5", 4), note("B4", 4), note("A4", 4), note("G4", 4),
    note("D5", 4), note("G5", 4), note("B5", 4), note("G5", 4),
    note("G5", 4), note("Fs5", 4), note("D5", 8),
    note("G5", 4), note("A5", 4), note("G5", 4), note("E5", 4),
    note("D5", 4), note("C5", 4), note("B4", 4), note("A4", 4),
    note("G4", 4), note("A4", 4), note("B4", 4), note("A4", 4),
    note("A4", 4), note("G4", 4), note("D4", 8),
    note("G5", 4), note("G5", 4), note("E5", 4), note("D5", 4),
    note("E5", 4), note("D5", 4), note("C5", 8),
    note("E5", 4), note("G5", 4), note("A5", 4), note("B5", 4),
    note("C6", 8), note("B5", 8),
    note("G5", 4), note("A5", 4), note("B5", 4), note("A5", 4),
    note("E5", 4), note("D5", 4), note("C5", 4), note("B4", 4),
    note("A4", 4), note("B4", 4), note("C5", 4), note("B4", 4),
    note("A4", 4), note("G4", 4), note("D4", 8),
]

# Triangle bass: G | G | C | D | Em | C | D | G || C | D | Em | D | C | G | D | G
BASS = [
    note("G2", 4), note("G2", 4), note("D3", 4), note("G2", 4),
    note("G2", 4), note("G3", 4), note("D3", 4), note("G2", 4),
    note("C3", 4), note("C3", 4), note("G2", 4), note("C3", 4),
    note("D3", 4), note("D3", 4), note("A2", 4), note("D3", 4),
    note("E3", 4), note("E3", 4), note("B2", 4), note("E3", 4),
    note("C3", 4), note("C3", 4), note("G2", 4), note("C3", 4),
    note("D3", 4), note("A2", 4), note("D3", 4), note("D3", 4),
    note("G2", 4), note("D3", 4), note("G3", 4), note("G2", 4),
    note("C3", 4), note("C3", 4), note("G2", 4), note("C3", 4),
    note("D3", 4), note("D3", 4), note("A2", 4), note("D3", 4),
    note("E3", 4), note("B2", 4), note("E3", 4), note("E3", 4),
    note("D3", 4), note("A2", 4), note("D3", 4), note("D3", 4),
    note("C3", 4), note("C3", 4), note("G2", 4), note("C3", 4),
    note("G2", 4), note("G2", 4), note("D3", 4), note("G2", 4),
    note("D3", 4), note("A2", 4), note("D3", 4), note("D3", 4),
    note("G2", 8), note("G3", 4), note("G2", 4),
]


def pulse(phase: float, duty: float) -> float:
    return 0.35 if (phase % 1.0) < duty else -0.35


def triangle(phase: float) -> float:
    t = phase % 1.0
    step = math.floor(t * 32) / 32
    return (4 * abs(step - 0.5) - 1.0) * 0.45


def noise_sample(state: list[int]) -> float:
    bit = ((state[0] >> 0) ^ (state[0] >> 1)) & 1
    state[0] = ((state[0] >> 1) | (bit << 14)) & 0x7FFF
    return 0.22 if (state[0] & 1) else -0.22


def render_notes(
    seq: list[tuple[int | None, int]],
    kind: str,
    duty: float = 0.25,
    volume: float = 1.0,
) -> list[float]:
    samples: list[float] = []
    phase = 0.0
    for midi, length in seq:
        n = length * SIXTEENTH
        if midi is None:
            samples.extend([0.0] * n)
            continue
        freq = midi_hz(midi)
        for i in range(n):
            phase += freq / SAMPLE_RATE
            env = 1.0
            attack = min(80, n // 8)
            release = max(40, n // 6)
            if i < attack:
                env = i / attack
            elif i > n - release:
                env = max(0.0, (n - i) / release)
            else:
                env = 0.72 if kind == "pulse" else 0.9
            if kind == "pulse":
                val = pulse(phase, duty)
            else:
                val = triangle(phase)
            samples.append(val * env * volume)
    return samples


def render_drums(bars: int) -> list[float]:
    steps = bars * 16
    samples = [0.0] * (steps * SIXTEENTH)
    lfsr = [0x7FFE]

    def put(start_step: int, kind: str, dur_steps: int = 2) -> None:
        start = start_step * SIXTEENTH
        length = dur_steps * SIXTEENTH
        for i in range(length):
            t = i / length
            if kind == "kick":
                freq = 140 * (1 - 0.7 * t)
                env = (1 - t) ** 2
                val = pulse(i * freq / SAMPLE_RATE, 0.5) * env * 0.55
            elif kind == "snare":
                env = (1 - t) ** 1.6
                val = noise_sample(lfsr) * env * 0.5
                val += pulse(i * 180 / SAMPLE_RATE, 0.5) * env * 0.12
            else:
                env = (1 - t) ** 4
                val = noise_sample(lfsr) * env * 0.18
            idx = start + i
            if idx < len(samples):
                samples[idx] += val

    for bar in range(bars):
        base = bar * 16
        put(base + 0, "kick", 3)
        put(base + 8, "kick", 2)
        put(base + 4, "snare", 3)
        put(base + 12, "snare", 3)
        for hat in range(0, 16, 2):
            put(base + hat, "hat", 1)
        if bar % 4 == 3:
            put(base + 14, "snare", 2)
    return samples


def mix(*channels: list[float]) -> list[float]:
    n = max(len(c) for c in channels)
    out = [0.0] * n
    for ch in channels:
        for i, v in enumerate(ch):
            out[i] += v
    # Tiny delay on the whole mix for NES-ish space
    delay = int(0.12 * SAMPLE_RATE)
    delayed = out[:]
    for i in range(delay, n):
        delayed[i] += out[i - delay] * 0.18
    peak = max(1e-6, max(abs(x) for x in delayed))
    scale = 0.86 / peak
    quantized = []
    for x in delayed:
        y = max(-1.0, min(1.0, x * scale))
        # 8-bit crunch
        y = round(y * 127) / 127
        quantized.append(y)
    return quantized


def write_wav(path: Path, samples: list[float]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "w") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        frames = b"".join(struct.pack("<h", int(max(-1, min(1, s)) * 32767)) for s in samples)
        wf.writeframes(frames)


def main() -> None:
    lead = render_notes(LEAD, "pulse", duty=0.125, volume=1.05)
    harm = render_notes(HARM, "pulse", duty=0.5, volume=0.55)
    bass = render_notes(BASS, "triangle", volume=0.95)
    drums = render_drums(16)
    samples = mix(lead, harm, bass, drums)
    out_wav = Path("public/sprites/overworld-theme.wav")
    write_wav(out_wav, samples)
    print(f"wrote {out_wav} ({len(samples) / SAMPLE_RATE:.2f}s)")


if __name__ == "__main__":
    main()
