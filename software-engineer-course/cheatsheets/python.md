# Python Cheatsheet

```python
# variables
name = "Jessie"
count = 3
price = 9.5
ok = True

# f-string
print(f"{name} has {count} items")

# list
items = ["top", "bottom"]
items.append("shoes")
for x in items:
    print(x)

# dict
item = {"type": "top", "color": "black"}
print(item["color"])

# if
if count > 0:
    print("not empty")
elif count == 0:
    print("empty")
else:
    print("weird")

# functions
def mean(nums):
    return sum(nums) / len(nums)

# files
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("hello\n")

# errors
try:
    n = int("3")
except ValueError:
    print("bad int")
```
