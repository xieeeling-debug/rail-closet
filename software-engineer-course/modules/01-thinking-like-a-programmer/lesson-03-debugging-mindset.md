# 01.3 — Debugging Mindset

## You will learn

- That bugs are normal  
- A calm process for finding them  
- How to read errors  

## Reframe

A bug does **not** mean you are bad at coding.  
It means your instructions and the computer’s rules disagree.

Every expert debugger was a confused beginner who stayed curious.

## The debug loop

1. **Reproduce** — make the bug happen again on purpose  
2. **Locate** — which line / which step fails?  
3. **Understand** — what did you expect vs what happened?  
4. **Fix** — change one thing  
5. **Verify** — test normal + edge cases  

## Reading errors

Example Python error:

```text
TypeError: can only concatenate str (not "int") to str
```

Translation: you tried to glue text and a number with `+` without converting.

Example:

```text
File "hello.py", line 3
    print("hello"
                 ^
SyntaxError: '(' was never closed
```

Translation: missing `)` on line 3.

**Always look at the file name and line number first.**

## Tools for beginners

- `print(value)` in Python  
- `console.log(value)` in JavaScript  
- Comment out sections temporarily  
- Rubber duck: explain the code out loud  

## Practice

Intentionally break a tiny program (next module) and write:

1. The error message  
2. What it means in your words  
3. How you fixed it  

## Next

→ [01.4 Pseudocode](./lesson-04-pseudocode.md)
