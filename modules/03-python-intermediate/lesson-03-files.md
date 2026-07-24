# 03.3 — Files (Read / Write)

## You will learn

- Reading text files  
- Writing results  
- Simple CSV ideas  

## Why files matter

Programs forget everything when they stop — unless you **save to disk**.

## Write a file

```python
with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("Day 1: learned dictionaries\n")
    f.write("Day 2: learning files\n")
```

`with` auto-closes the file. `"w"` overwrites.

## Append

```python
with open("notes.txt", "a", encoding="utf-8") as f:
    f.write("Day 3: still going\n")
```

## Read a file

```python
with open("notes.txt", "r", encoding="utf-8") as f:
    content = f.read()
print(content)
```

Line by line:

```python
with open("notes.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())
```

## Tiny CSV pattern

`scores.csv`:

```text
name,score
Ava,90
Ben,75
Cara,88
```

```python
scores = []
with open("scores.csv", "r", encoding="utf-8") as f:
    next(f)  # skip header
    for line in f:
        name, score = line.strip().split(",")
        scores.append(int(score))
print(sum(scores) / len(scores))
```

## Practice

1. Write 5 lines of learning notes to a file; read them back.  
2. Create `closet.csv` with header `type,color` and 4 rows; count tops.  

## Next

→ [03.4 Errors](./lesson-04-errors.md)
