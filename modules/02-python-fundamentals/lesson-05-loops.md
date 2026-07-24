# 02.5 — Loops

## You will learn

- `for` loops  
- `while` loops  
- `range`  
- Looping with conditions  

## `for` loops — known repetition

```python
for i in range(5):
    print(i)  # 0 1 2 3 4
```

```python
colors = ["black", "white", "blue"]
for color in colors:
    print(f"I have a {color} item")
```

## `while` loops — until a condition fails

```python
count = 3
while count > 0:
    print(count)
    count -= 1
print("Go!")
```

Careful: if the condition never becomes false, you get an **infinite loop**. Stop with `Ctrl+C`.

## Guessing game sketch

```python
secret = 7
guess = None

while guess != secret:
    guess = int(input("Guess 1-10: "))
    if guess < secret:
        print("Too low")
    elif guess > secret:
        print("Too high")
    else:
        print("Correct!")
```

## `break` and `continue`

```python
for n in range(10):
    if n == 3:
        continue  # skip 3
    if n == 8:
        break     # stop loop
    print(n)
```

## Practice

1. Print numbers 1 through 20.  
2. Print only even numbers from 1–20.  
3. Ask the user for numbers until they type `0`, then print the sum.  

## Next

→ [02.6 Lists](./lesson-06-lists.md)
