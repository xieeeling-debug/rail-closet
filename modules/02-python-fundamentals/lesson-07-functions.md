# 02.7 — Functions

## You will learn

- Defining functions  
- Parameters and return values  
- Why functions reduce repetition  

## Define and call

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Jessie")
greet("Friend")
```

## Return values

```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)
```

`return` sends a value back to the caller. After `return`, the function stops.

## Functions + lists

```python
def average(numbers):
    if len(numbers) == 0:
        return None
    return sum(numbers) / len(numbers)

print(average([10, 20, 30]))
print(average([]))
```

## Default parameters

```python
def tip_amount(bill, percent=10):
    return bill * percent / 100

print(tip_amount(100))
print(tip_amount(100, 15))
```

## Design tip

One function ≈ one job. Name it with a verb: `calculate_total`, `count_tops`, `is_valid_score`.

## Mini project ideas (pick one)

**A) Number guesser** — random number, loop until correct, count attempts.  
(`import random` then `random.randint(1, 10)`)

**B) Tip calculator function** — wrap earlier tip logic in functions; print a receipt-style summary.

## Module 02 Checkpoint

- [ ] Run Python files from the terminal  
- [ ] Use variables, input, if/else, loops, lists, functions  
- [ ] Build one mini interactive program  

## Next module

→ [Module 03 — Python Intermediate](../03-python-intermediate/)
