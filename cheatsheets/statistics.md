# Statistics Cheatsheet

```text
mean   = sum / n
median = middle of sorted values
mode   = most frequent
range  = max - min
variance ≈ average of (x - mean)^2
stdev  = sqrt(variance)
```

```python
import math
from collections import Counter

def mean(xs):
    return sum(xs) / len(xs)

def median(xs):
    s = sorted(xs)
    m = len(s) // 2
    return s[m] if len(s) % 2 else (s[m-1] + s[m]) / 2

def mode(xs):
    return Counter(xs).most_common(1)[0][0]

def stdev(xs):
    m = mean(xs)
    return math.sqrt(sum((x - m) ** 2 for x in xs) / len(xs))
```

**Remember:** mean ≠ typical when outliers exist — check median too.
