# 08.1 — What Makes an “App”?

## You will learn

- Website vs web app  
- State-driven UI  
- Examples around you  

## Website vs app (practical)

| Mostly website | Feels like an app |
|----------------|-------------------|
| Articles, docs | Interactive tools |
| Few changing parts | Many changing parts |
| Read content | Create/update data |

A closet outfit app is an **app**: you upload, filter, select, and pair items. The screen changes based on **state**.

## Core loop of apps

1. Show UI based on current data (state)  
2. User does something (event)  
3. Update state  
4. UI re-renders to match  

You already did a simple version with DOM + localStorage. Frameworks like React formalize this.

## Practice

Pick 3 apps on your phone. For each, write one piece of state it must remember (e.g. “currently selected chat”).

## Next

→ [08.2 Components and state](./lesson-02-components-state.md)
