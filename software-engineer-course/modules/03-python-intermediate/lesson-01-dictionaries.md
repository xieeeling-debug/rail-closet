# 03.1 — Dictionaries

## You will learn

- Key–value maps  
- Nested data for real apps  

## Lists vs dictionaries

- List: ordered items accessed by position `items[0]`  
- Dict: labeled values accessed by key `item["color"]`

```python
shirt = {
    "type": "top",
    "color": "white",
    "material": "cotton",
}

print(shirt["color"])
shirt["color"] = "ivory"
shirt["brand"] = "basic"
print(shirt)
```

## Looping

```python
for key, value in shirt.items():
    print(f"{key}: {value}")
```

## List of dictionaries (very common)

```python
closet = [
    {"type": "top", "color": "black"},
    {"type": "bottom", "color": "blue"},
    {"type": "top", "color": "white"},
]

for item in closet:
    if item["type"] == "top":
        print(item["color"])
```

This pattern appears in web apps, APIs, and your future React state.

## Practice

1. Make a dict for yourself: name, goal, favorite language.  
2. Make a list of 3 clothing dicts; print only materials.  
3. Count how many items have `"color": "black"`.  

## Next

→ [03.2 Strings deep dive](./lesson-02-strings.md)
