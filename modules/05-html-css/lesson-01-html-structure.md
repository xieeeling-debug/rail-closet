# 05.1 — HTML Structure

## You will learn

- What HTML is  
- The skeleton of every page  
- Tags and elements  

## HTML = structure

HTML describes **what is on the page**, not the fancy look (CSS) or behavior (JS).

Create `learning-lab/web/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, web!</h1>
    <p>I am learning HTML offline.</p>
  </body>
</html>
```

Open the file in your browser. You should see the heading and paragraph.

## Anatomy

- `<tag>` opens; `</tag>` closes  
- `<head>` — metadata for the browser  
- `<body>` — visible content  
- `lang="en"` — page language  

## Common tags preview

| Tag | Role |
|-----|------|
| `h1`–`h6` | Headings |
| `p` | Paragraph |
| `a` | Link |
| `img` | Image |
| `ul` / `ol` / `li` | Lists |
| `div` | Generic section box |
| `header`, `main`, `footer` | Landmark sections |

## Practice

Add a second paragraph and an `h2` subtitle to your page.

## Next

→ [05.2 Text, links, images, lists](./lesson-02-text-links-images.md)
