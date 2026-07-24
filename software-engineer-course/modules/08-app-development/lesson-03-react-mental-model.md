# 08.3 — React Mental Model

## You will learn

- What React is  
- JSX idea  
- `useState` intuition  

## React in one paragraph

**React** is a JavaScript library for building UIs from components. You describe what the UI should look like for the current state; React updates the DOM efficiently when state changes.

## JSX looks like HTML in JS

```jsx
function Hello({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

## useState

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count}
    </button>
  );
}
```

When `setCount` runs, React re-renders `Counter` with the new value.

## Tooling note

React apps usually need **Node.js** + a bundler (Vite is common). The RAIL Closet repo already uses Vite + React + TypeScript — you can study it even before you scaffold your own.

If Node is not installed yet, keep practicing component thinking with plain HTML/JS, then return here after installing Node (see tools setup).

## Next

→ [08.4 Mini React app](./lesson-04-mini-react-app.md)
