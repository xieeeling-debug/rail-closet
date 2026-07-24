# 04.3 — Spread: Range, Variance, Standard Deviation

## You will learn

- Why “average alone” lies  
- Range, variance, standard deviation  
- Intuition over memorization  

## Two classrooms, same mean

- Class A scores: `70, 80, 90`  
- Class B scores: `10, 80, 150`  

Same mean (80). Very different stories. **Spread** measures that difference.

## Range

```python
def data_range(nums):
    return max(nums) - min(nums)
```

Simple but only uses two points.

## Variance & standard deviation (population style for intuition)

Variance ≈ average squared distance from the mean.  
Standard deviation (σ) = sqrt(variance) — back in original units.

```python
import math

def mean(nums):
    return sum(nums) / len(nums)

def variance(nums):
    m = mean(nums)
    return sum((x - m) ** 2 for x in nums) / len(nums)

def stdev(nums):
    return math.sqrt(variance(nums))

a = [70, 80, 90]
b = [10, 80, 150]
print(stdev(a), stdev(b))
```

Class B’s stdev is much larger → more spread out.

> Note: sample variance often divides by `n-1`. For learning intuition, `/ n` is fine; interview prep can cover `/ (n-1)` later.

## Percentiles (intro)

Median = 50th percentile.  
Sorting helps you talk about “bottom 25%” vs “top 25%”.

## Practice

1. Compute range and stdev for `[2, 4, 4, 4, 5, 5, 7, 9]`.  
2. Invent two lists with the same mean but different stdev.  

## Next

→ [04.4 Probability intuition](./lesson-04-probability.md)
