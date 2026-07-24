# 06.5 — Arrays and Simple Logic

## You will learn

- Arrays in JS  
- `map` / `filter` intro  
- Building a filterable list  

```javascript
const closet = [
  { type: "top", color: "black" },
  { type: "bottom", color: "blue" },
  { type: "top", color: "white" },
];

const tops = closet.filter((item) => item.type === "top");
const labels = tops.map((item) => `${item.color} top`);
console.log(labels);
```

## Mini interactive feature (checkpoint)

Build a page that:

1. Stores an array of items  
2. Renders them into a list  
3. Has buttons or a dropdown to filter by type  
4. Updates the DOM when the filter changes  

This is the same mental model used in many filter UIs (closet apps, shops, dashboards) — simpler version.

## Module 06 Checkpoint

- [ ] Connect JS to HTML  
- [ ] Use functions and arrays  
- [ ] Respond to clicks  
- [ ] Change the DOM  
- [ ] Ship one interactive feature  

## Next module

→ [Module 07 — Web Development](../07-web-development/)
