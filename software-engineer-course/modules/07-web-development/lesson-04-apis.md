# 07.4 — Talking to APIs (Concepts + Practice)

## You will learn

- What an API response is  
- `fetch` basics  
- Offline fallback practice  

## Concept

An **API** lets your page request data from a service.

```javascript
async function loadQuote() {
  try {
    const res = await fetch("https://api.example.com/quote");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Network failed — use offline sample data");
  }
}
```

## Offline-friendly practice

When offline (or API blocked), use a local JSON file:

`data/sample.json`:

```json
{
  "items": [
    { "type": "top", "color": "white" },
    { "type": "bottom", "color": "navy" }
  ]
}
```

```javascript
async function loadLocal() {
  const res = await fetch("data/sample.json");
  const data = await res.json();
  console.log(data.items);
}
```

Note: some browsers restrict `fetch` on `file://`. If needed, run a tiny local server later (`npx serve` when Node is installed) or embed the JSON in your JS for practice.

## Practice

1. Explain API in one sentence in your notes.  
2. Load a local array (embedded in JS) and render it — same skills as API data handling.

## Next

→ [07.5 Accessibility & polish](./lesson-05-accessibility-polish.md)
