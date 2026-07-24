# 02.4 — Decisions (`if` / `elif` / `else`)

## You will learn

- Comparisons  
- Branching logic  
- Combining conditions  

## Comparisons

```python
x = 10
print(x > 5)    # True
print(x == 10)  # True (equal)
print(x != 7)   # True (not equal)
print(x <= 9)   # False
```

## if / elif / else

```python
score = int(input("Score (0-100): "))

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Keep practicing")
```

**Indentation matters in Python.** The indented block belongs to the `if`.

## Combining conditions

```python
temp = 22
raining = False

if temp > 20 and not raining:
    print("Good day for a walk")
elif raining:
    print("Take an umbrella")
else:
    print("Maybe a jacket")
```

| Keyword | Meaning |
|---------|---------|
| `and` | Both must be true |
| `or` | At least one true |
| `not` | Flip true/false |

## Closet-style example

```python
item_type = input("Type (top/bottom): ").lower()

if item_type == "top":
    print("Hang on the top rail")
elif item_type == "bottom":
    print("Hang on the bottom rail")
else:
    print("Unknown type — add a new category later")
```

## Practice

1. Ask for a password string; if length >= 8 print “OK”, else “Too short”.  
2. Ask for a number; say whether it is positive, negative, or zero.  
3. Movie age check: 18+ can watch; otherwise deny.  

## Next

→ [02.5 Loops](./lesson-05-loops.md)
