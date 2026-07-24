# 02.6 — Lists

## You will learn

- Creating and indexing lists  
- Appending, slicing  
- Looping and aggregating  

## Lists hold ordered items

```python
tops = ["white tee", "blue shirt", "black hoodie"]
print(tops[0])      # white tee (first item — index 0)
print(tops[-1])     # black hoodie (last)
print(len(tops))    # 3
```

## Changing lists

```python
tops.append("green sweater")  # add to end
tops[1] = "navy shirt"        # replace
removed = tops.pop()          # remove last
print(tops)
print(removed)
```

## Slicing

```python
nums = [10, 20, 30, 40, 50]
print(nums[1:4])  # [20, 30, 40]
print(nums[:2])   # [10, 20]
print(nums[2:])   # [30, 40, 50]
```

## Useful patterns

```python
scores = [80, 95, 70, 100]
print(sum(scores))
print(min(scores))
print(max(scores))
print(sum(scores) / len(scores))
```

```python
closet = ["top:red", "bottom:blue", "top:black"]
top_count = 0
for item in closet:
    if item.startswith("top:"):
        top_count += 1
print(top_count)
```

## Practice

1. Make a list of 5 foods you like; print each on its own line.  
2. Start with `[]`; ask the user to add 3 clothing items; print the list.  
3. Given `prices = [12.5, 9.0, 20.0]`, print total and average.  

## Next

→ [02.7 Functions](./lesson-07-functions.md)
