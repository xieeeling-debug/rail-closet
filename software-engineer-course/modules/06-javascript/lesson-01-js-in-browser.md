# 06.1 — JavaScript in the Browser

## You will learn

- Where JS runs for web pages  
- Connecting a script file  
- `console.log`  

## Add JavaScript

`index.html` before `</body>`:

```html
<button id="helloBtn">Say hello</button>
<script src="script.js"></script>
```

`script.js`:

```javascript
console.log("JS is running");
```

Open DevTools Console (`F12` or right-click → Inspect → Console) to see the message.

## Python vs JavaScript (quick map)

| Idea | Python | JavaScript |
|------|--------|------------|
| Print | `print(x)` | `console.log(x)` |
| Variable | `x = 1` | `let x = 1` |
| Cond | `if x:` | `if (x) { }` |
| Loop | `for i in list:` | `for (const i of list) { }` |
| Function | `def f():` | `function f() { }` / `const f = () => {}` |

## Practice

Log your name and “Module 06 started” to the console.

## Next

→ [06.2 Variables and functions](./lesson-02-variables-functions.md)
