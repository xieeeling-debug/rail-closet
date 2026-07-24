# 05.2 — Text, Links, Images, Lists

## You will learn

- Links and images  
- Lists  
- Semantic sections  

```html
<body>
  <header>
    <h1>Jessie Learns to Code</h1>
    <nav>
      <a href="index.html">Home</a> |
      <a href="projects.html">Projects</a>
    </nav>
  </header>

  <main>
    <h2>About</h2>
    <p>I am learning <strong>Python</strong>, statistics, and web development.</p>

    <h2>Goals</h2>
    <ul>
      <li>Finish this course</li>
      <li>Build 3 portfolio projects</li>
      <li>Become a software engineer</li>
    </ul>

    <h2>Photo</h2>
    <!-- Put an image file beside this HTML, or use a placeholder path -->
    <img src="images/me.jpg" alt="Portrait of the learner" width="200" />

    <p>External practice link:
      <a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">MDN</a>
      (needs internet — skip when offline)
    </p>
  </main>

  <footer>
    <p>Built by me · Offline learning course</p>
  </footer>
</body>
```

## Rules of thumb

- Only one `h1` per page (usually)  
- `alt` text on images for accessibility  
- Prefer `<main>`, `<header>`, `<footer>` over endless anonymous `<div>`s when possible  

## Practice

Create `projects.html` linked from home with a numbered list of 3 project ideas.

## Next

→ [05.3 CSS basics](./lesson-03-css-basics.md)
