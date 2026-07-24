# 07.3 — localStorage

## You will learn

- Saving data in the browser  
- JSON stringify/parse  
- Persisting a list after refresh  

```javascript
const KEY = "closet-items";

function loadItems() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveItems(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

let items = loadItems();
items.push({ type: "top", color: "black" });
saveItems(items);
console.log(loadItems());
```

Refresh the page — data can still be there.

## Notes

- localStorage is per browser/device  
- Good for prototypes; real products often need servers/databases later  
- Only store non-sensitive practice data  

## Practice

Todo list or closet list that survives refresh.

## Next

→ [07.4 APIs](./lesson-04-apis.md)
