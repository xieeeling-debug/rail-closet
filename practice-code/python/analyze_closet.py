"""Analyze sample_closet.csv — run from this folder:
python3 analyze_closet.py
"""

from collections import Counter


def load_closet(path="sample_closet.csv"):
    rows = []
    with open(path, "r", encoding="utf-8") as f:
        next(f)  # header
        for line in f:
            type_, color, material = line.strip().split(",")
            rows.append({"type": type_, "color": color, "material": material})
    return rows


def text_bars(values):
    counts = Counter(values)
    for key, count in sorted(counts.items()):
        print(f"{key:12} {'#' * count} ({count})")


if __name__ == "__main__":
    closet = load_closet()
    print(f"Total items: {len(closet)}")
    print("\nBy type:")
    text_bars([item["type"] for item in closet])
    print("\nBy color:")
    text_bars([item["color"] for item in closet])
