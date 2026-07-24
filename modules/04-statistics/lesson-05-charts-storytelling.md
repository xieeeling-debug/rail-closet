# 04.5 — Charts and Storytelling

## You will learn

- Which chart for which question  
- Text-based charts without extra installs  
- Optional matplotlib note  

## Pick the right chart

| Question | Chart |
|----------|-------|
| How many per category? | Bar |
| How does a value change over time? | Line |
| How are numeric values distributed? | Histogram |
| Relationship between two numeric vars? | Scatter |

## Offline-friendly: text bar chart

```python
from collections import Counter

def text_bars(items):
    counts = Counter(items)
    max_count = max(counts.values())
    for key, count in sorted(counts.items()):
        bar = "#" * count
        print(f"{key:10} {bar} ({count})")

closet_colors = ["black", "white", "black", "blue", "black", "white"]
text_bars(closet_colors)
```

## Story template

After any analysis, write:

1. **Question** I asked  
2. **What I computed**  
3. **What I saw**  
4. **What it might mean** (careful with claims)  
5. **Limitation** (small sample? missing data?)  

## Optional: matplotlib (needs install when online)

```bash
pip install matplotlib
```

```python
import matplotlib.pyplot as plt

counts = {"black": 3, "white": 2, "blue": 1}
plt.bar(counts.keys(), counts.values())
plt.title("Closet colors")
plt.savefig("colors.png")  # works offline after install
```

If you cannot install packages yet, text charts are enough.

## Practice

1. Make a text bar chart of clothing types.  
2. Write a 5-sentence story about the result.  

## Next

→ [04.6 Mini analysis project](./lesson-06-mini-analysis.md)
