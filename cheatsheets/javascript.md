# JavaScript Cheatsheet

```javascript
const title = "Closet";
let count = 0;

function greet(name) {
  return `Hi, ${name}`;
}

const add = (a, b) => a + b;

const items = [
  { type: "top", color: "black" },
  { type: "bottom", color: "blue" },
];

const tops = items.filter((i) => i.type === "top");

const el = document.querySelector("#list");
el.textContent = "Hello";

document.querySelector("#btn").addEventListener("click", () => {
  count += 1;
});

localStorage.setItem("k", JSON.stringify(items));
const loaded = JSON.parse(localStorage.getItem("k") || "[]");
```
