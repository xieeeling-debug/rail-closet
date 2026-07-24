# 04.4 — Probability Intuition

## You will learn

- Basic probability language  
- Independent simple events  
- Simulation with Python  

## Probability as “how often we expect”

If a fair coin is flipped many times, heads ≈ 50%.

```text
P(event) is between 0 and 1
0 = impossible
1 = certain
```

```python
# theoretical
p_heads = 0.5
```

## Simulate it

```python
import random

def coin_flip_ratio(trials=1000):
    heads = 0
    for _ in range(trials):
        if random.random() < 0.5:
            heads += 1
    return heads / trials

print(coin_flip_ratio())
```

More trials → usually closer to 0.5 (law of large numbers intuition).

## And / Or (simplified)

For **independent** events:

- P(A and B) ≈ P(A) × P(B)  
- P(A or B) ≈ P(A) + P(B) − P(A and B)

Example: probability of rolling two dice both showing 6 is `(1/6)*(1/6)`.

## App connection

Recommendation systems, A/B tests, fraud flags — all lean on probability ideas. You only need the intuition now.

## Practice

1. Simulate rolling a 6-sided die 6000 times; count how often you get a `6`.  
2. Estimate probability of drawing `"black"` from `["black","black","white","blue"]` by simulation and by exact fraction.  

## Next

→ [04.5 Charts and storytelling](./lesson-05-charts-storytelling.md)
