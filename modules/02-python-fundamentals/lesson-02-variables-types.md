# 02.2 — Variables and Types

## You will learn

- Creating variables  
- Core types: `int`, `float`, `str`, `bool`  
- Basic math  

## Variables are labeled boxes

```python
name = "Jessie"
age = 25
height_m = 1.65
is_learning = True

print(name)
print(age)
print(type(age))
print(type(name))
```

| Type | Example | Meaning |
|------|---------|---------|
| `str` | `"hello"` | Text |
| `int` | `42` | Whole number |
| `float` | `3.14` | Decimal |
| `bool` | `True` / `False` | Yes/no |

## Math

```python
a = 10
b = 3
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3 (integer division)
print(a % b)   # 1 (remainder)
print(a ** b)  # 1000 (power)
```

## Updating variables

```python
score = 0
score = score + 10
score += 5   # same idea, shorter
print(score)
```

## Mixing types carefully

```python
# Wrong:
# print("Age: " + 25)

# Right:
print("Age: " + str(25))
print(f"Age: {25}")  # f-string — recommended
```

## Practice

Create `variables_practice.py`:

1. Store your name, city, and years of learning coding (can be `0`).  
2. Print a sentence using an f-string.  
3. Compute the area of a rectangle with width `4` and height `7`.  

## Next

→ [02.3 Input and output](./lesson-03-input-output.md)
