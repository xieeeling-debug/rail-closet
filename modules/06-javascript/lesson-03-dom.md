# 06.3 — The DOM

## You will learn

- What the DOM is  
- Selecting elements  
- Changing text and styles  

## DOM = live page tree

The browser turns HTML into objects you can change with JavaScript.

```html
<h1 id="title">Old title</h1>
<p class="note">Hello</p>
```

```javascript
const title = document.querySelector("#title");
title.textContent = "New title";

const note = document.querySelector(".note");
note.style.color = "#0f6b4c";
```

## Create elements

```javascript
const li = document.createElement("li");
li.textContent = "Black hoodie";
document.querySelector("#closetList").appendChild(li);
```

## Practice

Page with an empty `<ul id="closetList">`. Use JS to add 3 clothing items on load.

## Next

→ [06.4 Events](./lesson-04-events.md)
