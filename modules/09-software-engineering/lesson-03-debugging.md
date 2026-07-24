# 09.3 — Debugging Systematically

## You will learn

- A checklist that scales  
- Binary search debugging  
- Logging wisely  

## Checklist

1. Reproduce with the smallest example  
2. Read the full error  
3. Verify assumptions with logs  
4. Change **one** thing  
5. Retest edge cases  

## Binary search the bug

If 100 lines might be wrong:

1. Disable/comment half  
2. See if bug remains  
3. Keep the half that still fails  
4. Repeat  

## Good logs

```python
print("DEBUG items=", items)
print("DEBUG filter=", filter_value)
```

Remove or silence noisy logs before sharing projects.

## Practice

Take an old buggy script (or break one on purpose). Write a short postmortem: symptom → cause → fix → how to prevent.

## Next

→ [09.4 Reading other people’s code](./lesson-04-reading-code.md)
