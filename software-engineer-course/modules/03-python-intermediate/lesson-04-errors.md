# 03.4 — Errors and `try` / `except`

## You will learn

- Common exception types  
- Catching errors without crashing  

## Letting users make mistakes safely

```python
raw = input("Enter an integer: ")
try:
    number = int(raw)
    print(f"Double is {number * 2}")
except ValueError:
    print("That was not an integer. Try again.")
```

## File missing

```python
try:
    with open("missing.txt", "r") as f:
        print(f.read())
except FileNotFoundError:
    print("File not found — create it first.")
```

## Divide carefully

```python
def safe_average(nums):
    try:
        return sum(nums) / len(nums)
    except ZeroDivisionError:
        return None
```

## Guidance

- Catch **specific** errors when you can.  
- Do not wrap your entire program in one giant `try` blindly.  
- Print a helpful message; optionally retry.

## Practice

1. Tip calculator that rejects non-numeric input.  
2. Program that asks for a filename and handles missing files.  

## Next

→ [03.5 Modules](./lesson-05-modules.md)
