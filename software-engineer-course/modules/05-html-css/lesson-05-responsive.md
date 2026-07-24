# 05.5 — Responsive Design

## You will learn

- Mobile-first thinking  
- Media queries  
- Testing with browser resize  

## Why responsive?

Your page should work on phones and desktops. Most people browse on phones.

You already added:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## Fluid basics

```css
img {
  max-width: 100%;
  height: auto;
}

.container {
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
}
```

## Media query

```css
.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (min-width: 700px) {
  .nav {
    flex-direction: row;
    gap: 1.5rem;
  }
}
```

Meaning: on screens ≥ 700px wide, switch nav to a horizontal row.

## How to test offline

1. Open your HTML file.  
2. Resize the browser window.  
3. Or use DevTools device toolbar (`Ctrl+Shift+M` / `Cmd+Shift+M`).  

## Mini site checkpoint

Build a 1–2 page personal site with:

- Header + nav  
- About section  
- Projects list  
- CSS file  
- Looks acceptable on a narrow phone-sized window  

## Next module

→ [Module 06 — JavaScript](../06-javascript/)
