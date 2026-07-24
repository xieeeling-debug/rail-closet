# 08.2 — Components and State (Concepts)

## You will learn

- Components as reusable UI pieces  
- Props vs state  
- Unidirectional thinking  

## Components

A **component** is a reusable chunk of UI + logic.

Examples:

- `NavBar`  
- `ClothingCard`  
- `FilterRow`  
- `PairingPreview`  

## Props vs state

| | Props | State |
|---|-------|-------|
| What | Inputs from parent | Data owned inside |
| Who changes | Parent | Component (via setters) |
| Example | `color="black"` | `selectedTop` |

## Plain English sketch

```text
App state:
  items = [...]
  selectedTop = null
  selectedBottom = null

WHEN user clicks a top:
  selectedTop = that item
WHEN user clicks a bottom:
  selectedBottom = that item
SHOW pairing of selectedTop + selectedBottom
```

## Practice

Draw boxes for components of a todo app. List state fields.

## Next

→ [08.3 React mental model](./lesson-03-react-mental-model.md)
