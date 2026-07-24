# 02.3 — Input and Output

## You will learn

- `input()`  
- Converting strings to numbers  
- Building a tiny interactive program  

## Reading user input

```python
name = input("What is your name? ")
print(f"Nice to meet you, {name}!")
```

Important: `input()` **always returns a string**.

```python
age_text = input("How old are you? ")
age = int(age_text)
print(f"Next year you will be {age + 1}.")
```

If the user types `"twenty"`, `int(...)` will crash — that is an edge case. Later we handle errors; for now, type numbers carefully.

## Mini program: tip calculator

```python
bill = float(input("Bill amount: "))
percent = float(input("Tip percent (e.g. 10): "))
tip = bill * percent / 100
total = bill + tip
print(f"Tip: {tip:.2f}")
print(f"Total: {total:.2f}")
```

`:.2f` means “show 2 decimal places”.

## Practice

1. Ask for temperature in Celsius; print Fahrenheit.  
   Formula: `F = C * 9/5 + 32`  
2. Ask for two numbers; print their sum, difference, product.  

## Next

→ [02.4 Decisions](./lesson-04-decisions.md)
