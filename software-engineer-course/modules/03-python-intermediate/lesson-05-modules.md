# 03.5 — Modules and Organizing Code

## You will learn

- `import`  
- Standard library highlights  
- Splitting code across files  

## Using the standard library

```python
import math
import random
from datetime import date

print(math.sqrt(16))
print(random.randint(1, 6))
print(date.today())
```

## Your own module

`stats_utils.py`:

```python
def mean(numbers):
    return sum(numbers) / len(numbers)
```

`main.py` (same folder):

```python
from stats_utils import mean

print(mean([2, 4, 6]))
```

## Project layout idea

```text
expense_tracker/
  main.py
  storage.py
  calculations.py
  data/
    expenses.csv
  README.md
```

## Module 03 Project — pick one

### A) Gradebook

- Store student → list of scores (dict)  
- Add scores  
- Compute averages  
- Save/load a CSV  

### B) Expense tracker

- Add expenses with category + amount  
- List them  
- Show total by category  
- Save to file  

## Checkpoint

- [ ] Use dicts for structured records  
- [ ] Read/write files  
- [ ] Handle bad input with try/except  
- [ ] Split helpers into a module  
- [ ] Finish gradebook or expense tracker  

## Next module

→ [Module 04 — Statistics](../04-statistics/)
