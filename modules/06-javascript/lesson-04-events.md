# 06.4 — Events and Interactivity

## You will learn

- Click handlers  
- Reading inputs  
- Updating the page on user action  

```html
<input id="itemInput" placeholder="Clothing item" />
<button id="addBtn">Add</button>
<ul id="list"></ul>
<p id="message"></p>
```

```javascript
const input = document.querySelector("#itemInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) {
    message.textContent = "Please type something.";
    return;
  }
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
  input.value = "";
  message.textContent = "Added!";
});
```

## Other useful events

- `input` — fires as user types  
- `submit` — forms  
- `keydown` — keyboard  

## Practice

1. Counter app: buttons `+` and `-` change a number on screen.  
2. Theme toggle: button switches body background between two colors.  

## Next

→ [06.5 Arrays and logic](./lesson-05-arrays-logic.md)
