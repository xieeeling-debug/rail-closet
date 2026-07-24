# 09.2 — Testing Basics

## You will learn

- Why tests exist  
- Manual vs automated  
- A tiny Python test habit  

## Manual test script

Before automated frameworks, write a checklist:

```text
Feature: average()
1. average([2,4,6]) should be 5
2. average([10]) should be 10
3. average([]) should return None or error (decide!)
```

Run it every time you change the function.

## Tiny automated tests (Python)

`test_stats.py`:

```python
from stats_utils import mean

assert mean([2, 4, 6]) == 5
assert mean([10]) == 10
print("All tests passed")
```

Run: `python3 test_stats.py`

## Idea for JS

```javascript
function add(a, b) { return a + b; }
console.assert(add(2, 3) === 5, "add failed");
```

## Practice

Add assertions for your mean/median functions and for password length validation.

## Next

→ [09.3 Debugging systematically](./lesson-03-debugging.md)
