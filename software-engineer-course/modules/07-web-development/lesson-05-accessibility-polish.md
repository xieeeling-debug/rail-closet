# 07.5 — Accessibility and Polish

## You will learn

- Accessible labels and contrast  
- Focus states  
- Finishing touches that look professional  

## Quick wins

- Every input has a `<label>`  
- Buttons say what they do (“Add item”, not only “OK”)  
- Images have meaningful `alt` (or `alt=""` if decorative)  
- Do not rely on color alone for meaning  
- Check keyboard: can you Tab to controls?  

```css
button:focus-visible {
  outline: 3px solid #0b5fff;
  outline-offset: 2px;
}
```

## Polish checklist

- [ ] Consistent spacing  
- [ ] Readable font size (≥ 16px body often comfortable)  
- [ ] Empty states (“No items yet — add your first”)  
- [ ] Error messages near the problem  
- [ ] Works on a narrow screen  

## Module 07 Project

**Offline Closet Notes Web App**

- Add clothing notes (type + color + text)  
- Save with localStorage  
- Filter list  
- Multi-section layout + accessible form  
- README: how to open offline  

## Next module

→ [Module 08 — App Development](../08-app-development/)
