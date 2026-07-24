# 06.2 — Variables and Functions in JS

## You will learn

- `let`, `const`  
- Types  
- Functions  

```javascript
const course = "Software Engineer Path"; // does not get reassigned
let lessonsDone = 0; // can change
lessonsDone = lessonsDone + 1;

const name = "Jessie";
const active = true;
const score = 95.5;

function greet(person) {
  return `Hello, ${person}!`;
}

const add = (a, b) => a + b;

console.log(greet(name));
console.log(add(2, 3));
```

## Notes

- Prefer `const` by default; use `let` when the value must change.  
- Avoid old `var` as a beginner default.  
- Strings can use backticks `` ` `` for templates.

## Practice

Write functions: `celsiusToFahrenheit`, `isLongEnough(password)`.

## Next

→ [06.3 The DOM](./lesson-03-dom.md)
