# 01.4 — Pseudocode Practice

## You will learn

- To write pseudocode  
- To translate pseudocode → real code later  

## What is pseudocode?

**Pseudocode** looks like code but uses plain language. No perfect syntax required.

```text
FUNCTION average(scores):
  IF scores is empty:
    RETURN "No scores"
  total = 0
  FOR each score in scores:
    total = total + score
  RETURN total / number_of_scores
```

## Why bother?

- Separates **thinking** from **typing**  
- Easier to spot logic mistakes  
- Works across languages  

## Pattern library

### Counting

```text
count = 0
FOR each item:
  IF item matches rule:
    count = count + 1
RETURN count
```

### Finding max

```text
best = first item
FOR each item:
  IF item > best:
    best = item
RETURN best
```

### Filtering a closet

```text
results = empty list
FOR each clothing item:
  IF item.color == chosen_color:
    ADD item to results
SHOW results
```

## Practice

Write pseudocode for:

1. Guess-the-number game (computer picks 1–10; user guesses until correct)  
2. Sum only even numbers from a list  
3. RAIL-style pair: user picks one top and one bottom; show both names  

## Module 01 Checkpoint

- [ ] I can write algorithms with sequence / decision / loop  
- [ ] I list inputs, outputs, edge cases before coding  
- [ ] I have a debug process  
- [ ] I can write pseudocode for a small app idea  

## Next module

→ [Module 02 — Python Fundamentals](../02-python-fundamentals/)
