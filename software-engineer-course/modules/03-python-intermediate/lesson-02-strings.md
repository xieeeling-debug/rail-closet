# 03.2 — Strings Deep Dive

## You will learn

- Indexing and slicing strings  
- Useful string methods  
- Cleaning messy input  

```python
text = "  Black Hoodie  "
print(text.strip())          # remove edges whitespace
print(text.lower())
print(text.upper())
print("Hoodie" in text)
print(text.strip().replace("Black", "Navy"))
```

```python
words = "red,green,blue".split(",")
print(words)
print("-".join(words))
```

```python
name = "jessie"
print(name[0])
print(name[:3])
print(len(name))
```

## Validation helpers

```python
def looks_like_email(s):
    s = s.strip()
    return "@" in s and "." in s
```

(Not perfect — good enough for practice.)

## Practice

1. Ask for a clothing color; normalize with `.strip().lower()`.  
2. Count vowels in a sentence.  
3. Turn `"tops|bottoms|shoes"` into a Python list.  

## Next

→ [03.3 Files](./lesson-03-files.md)
