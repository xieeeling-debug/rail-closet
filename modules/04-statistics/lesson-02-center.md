# 04.2 — Center: Mean, Median, Mode

## You will learn

- Mean, median, mode  
- When each is useful  
- Python implementations  

## Mean (average)

Sum of values ÷ count.

```python
def mean(nums):
    return sum(nums) / len(nums)

scores = [70, 80, 90, 100]
print(mean(scores))  # 85.0
```

Sensitive to outliers: `[70, 80, 90, 1000]` pulls the mean up hard.

## Median (middle value)

Sort, then pick the middle (or average of two middles).

```python
def median(nums):
    s = sorted(nums)
    n = len(s)
    mid = n // 2
    if n % 2 == 1:
        return s[mid]
    return (s[mid - 1] + s[mid]) / 2

print(median([70, 80, 90, 1000]))  # 85.0
```

Often better for skewed data (incomes, home prices).

## Mode (most frequent)

```python
from collections import Counter

def mode(values):
    counts = Counter(values)
    return counts.most_common(1)[0][0]

colors = ["black", "white", "black", "blue", "black"]
print(mode(colors))  # black
```

Great for categorical closet data.

## Practice

Dataset: `prices = [12, 15, 15, 20, 100]`

1. Compute mean and median by hand, then with code.  
2. Which better represents a “typical” price? Why?  
3. Find the mode of `["top","bottom","top","top","shoes"]`.  

## Next

→ [04.3 Spread](./lesson-03-spread.md)
