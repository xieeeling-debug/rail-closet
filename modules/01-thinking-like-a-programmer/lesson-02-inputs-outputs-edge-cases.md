# 01.2 — Inputs, Outputs, and Edge Cases

## You will learn

- To define what goes in and what comes out  
- To hunt for weird cases early  

## The I/O habit

Before coding, write:

- **Inputs:** what do I receive?  
- **Outputs:** what should I produce?  
- **Rules:** how do inputs become outputs?  

### Example: Tip calculator

- Inputs: bill amount, tip percent  
- Output: tip money, total  
- Rule: tip = bill × percent/100; total = bill + tip  

### Example: Average test score

- Inputs: list of scores  
- Output: average  
- Rule: sum ÷ count  

## Edge cases (the sneaky bugs)

An **edge case** is an unusual but possible input.

| Feature | Normal | Edge cases |
|---------|--------|------------|
| Average scores | 80, 90, 100 | Empty list; one score; negative? |
| Login age | 25 | 0; 200; letters “twenty” |
| Divide bill | 2 people | 0 people |

Professionals ask: “What if empty? What if huge? What if wrong type?”

## Practice

For each problem, write Inputs / Outputs / Edge cases:

1. Convert Celsius → Fahrenheit  
2. Count how many tops are in a closet list  
3. Check whether a password is at least 8 characters  

## Next

→ [01.3 Debugging mindset](./lesson-03-debugging-mindset.md)
