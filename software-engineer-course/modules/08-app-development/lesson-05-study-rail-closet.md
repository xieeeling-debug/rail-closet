# 08.5 — Study RAIL Closet as a Real Example

This repository’s main app lives outside the course folder:

```text
rail-closet/
  src/           ← React app source
  index.html
  package.json
  software-engineer-course/   ← you are here
```

## Guided tour (read-only at first)

1. Open `package.json` — note scripts: `dev`, `build`.  
2. Open `src/` — find the main App component and how pieces are organized.  
3. Search for words like `filter`, `type`, `color`, `material`.  
4. Identify **state**: what changes when you select a top/bottom?  
5. Identify **UI sections**: add clothes, filters, pairing preview.  

## Learning tasks

Write `notes/rail-closet-tour.md`:

1. List 5 components or UI regions you notice.  
2. List 5 pieces of state the app must track.  
3. Map each to ideas from Modules 05–08 (HTML structure, CSS layout, events, filters, React state).  
4. Propose one small improvement you might build later (e.g. sort by color name).  

## Do not be intimidated

Production code is denser than tutorials. Your job is not to understand every line today. Your job is to **recognize patterns**: components, state, handlers, props.

## Module 08 Project

Ship **Closet Mini** (React or plain JS) with:

- List of items  
- Filter  
- Add item  
- README with screenshots or description  
- Optional: pair top + bottom  

## Next module

→ [Module 09 — Software Engineering](../09-software-engineering/)
