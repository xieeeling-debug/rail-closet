# 08.4 — Build a Mini React App

## You will learn

- Scaffolding with Vite (when online once)  
- A filterable list app  
- Running locally afterward  

## Create a project (needs network once)

```bash
npm create vite@latest closet-mini -- --template react
cd closet-mini
npm install
npm run dev
```

After dependencies are installed, `npm run dev` often works offline.

## Starter logic to type yourself

```jsx
import { useState } from "react";

const starter = [
  { id: 1, type: "top", color: "black" },
  { id: 2, type: "bottom", color: "blue" },
  { id: 3, type: "top", color: "white" },
];

export default function App() {
  const [items] = useState(starter);
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? items : items.filter((i) => i.type === filter);

  return (
    <main>
      <h1>Closet Mini</h1>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("top")}>Tops</button>
        <button onClick={() => setFilter("bottom")}>Bottoms</button>
      </div>
      <ul>
        {visible.map((item) => (
          <li key={item.id}>
            {item.color} {item.type}
          </li>
        ))}
      </ul>
    </main>
  );
}
```

## Stretch

- Add a form to push new items into state  
- Save to localStorage  
- Highlight a selected top + bottom  

## If you cannot install Node yet

Rebuild the same UI with HTML + JS modules from Module 06–07. The concepts transfer 1:1.

## Next

→ [08.5 Study RAIL Closet](./lesson-05-study-rail-closet.md)
