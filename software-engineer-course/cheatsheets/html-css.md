# HTML & CSS Cheatsheet

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Title</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header><h1>Brand</h1></header>
  <main>
    <p>Text <a href="page.html">link</a></p>
    <ul><li>One</li></ul>
    <img src="pic.jpg" alt="Description" />
  </main>
  <script src="script.js"></script>
</body>
</html>
```

```css
* { box-sizing: border-box; }
body { margin: 0; font-family: Georgia, serif; }
.row { display: flex; gap: 1rem; flex-wrap: wrap; }
.container { width: min(100% - 2rem, 60rem); margin-inline: auto; }
@media (min-width: 700px) {
  .row { flex-wrap: nowrap; }
}
```
