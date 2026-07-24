# 07.2 — Forms and Validation

## You will learn

- Form elements  
- Reading values  
- Basic validation  

```html
<form id="addForm">
  <label>
    Type
    <select name="type" required>
      <option value="">Choose…</option>
      <option value="top">Top</option>
      <option value="bottom">Bottom</option>
    </select>
  </label>
  <label>
    Color
    <input name="color" required minlength="2" />
  </label>
  <button type="submit">Save</button>
</form>
<p id="formMsg"></p>
```

```javascript
document.querySelector("#addForm").addEventListener("submit", (event) => {
  event.preventDefault(); // stay on page
  const data = new FormData(event.target);
  const type = data.get("type");
  const color = data.get("color");
  document.querySelector("#formMsg").textContent = `Saved ${color} ${type}`;
  event.target.reset();
});
```

## Practice

Contact form that checks email contains `@` before “sending” (show a success message only — no real email needed).

## Next

→ [07.3 localStorage](./lesson-03-localstorage.md)
