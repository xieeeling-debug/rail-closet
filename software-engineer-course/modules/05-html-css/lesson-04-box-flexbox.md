# 05.4 — Box Model and Flexbox Layout

## You will learn

- Content, padding, border, margin  
- Flexbox for rows and alignment  

## Box model

Every element is a box:

```text
margin
  border
    padding
      content
```

```css
.card {
  padding: 1rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  max-width: 40rem;
}
```

`box-sizing: border-box;` (often set on `*`) makes width include padding/border — easier for beginners.

```css
* {
  box-sizing: border-box;
}
```

## Flexbox — arrange items in a row or column

```html
<div class="row">
  <div class="item">Top</div>
  <div class="item">Bottom</div>
  <div class="item">Shoes</div>
</div>
```

```css
.row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: stretch;
}

.item {
  flex: 1 1 150px;
  background: #e7f0ea;
  padding: 1rem;
}
```

Useful properties: `justify-content`, `align-items`, `flex-direction`, `gap`.

## Practice

1. Make a header with site title on the left and nav links on the right using flexbox.  
2. Make three equal-width feature boxes in a row.  

## Next

→ [05.5 Responsive design](./lesson-05-responsive.md)
