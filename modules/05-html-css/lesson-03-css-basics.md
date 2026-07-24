# 05.3 — CSS Basics

## You will learn

- Selectors  
- Colors, fonts, spacing  
- Linking a stylesheet  

## Connect CSS

`index.html` head:

```html
<link rel="stylesheet" href="styles.css" />
```

`styles.css`:

```css
body {
  font-family: Georgia, "Times New Roman", serif;
  color: #1a1a1a;
  background: #f3efe6;
  margin: 0;
  line-height: 1.5;
}

h1 {
  color: #0b3d2e;
}

a {
  color: #0b5fff;
}

.highlight {
  background: #ffe08a;
  padding: 0.2rem 0.4rem;
}
```

In HTML: `<span class="highlight">important</span>`

## Selector cheatsheet

| Selector | Matches |
|----------|---------|
| `h1` | All h1 tags |
| `.highlight` | class="highlight" |
| `#main` | id="main" |
| `header a` | links inside header |

## Practice

1. Change background and heading color.  
2. Increase paragraph font size.  
3. Style the footer differently from main.  

## Next

→ [05.4 Box model and Flexbox](./lesson-04-box-flexbox.md)
