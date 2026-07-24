# 09.1 — Git Daily Workflow

## You will learn

- A simple daily loop  
- Meaningful commits  
- Branches (intro)  

## Daily loop

```bash
git status
git add -p          # or git add <files>
git commit -m "Explain why this change exists"
git log --oneline -5
```

## Branch intro

```bash
git branch feature-filter
git switch feature-filter
# make changes, commit
git switch main
```

Branches let you experiment without breaking your main work.

## Commit hygiene

- Small commits > giant mystery dumps  
- Message focuses on **why**  
- Do not commit secrets (passwords, API keys)  

## Practice

In learning-lab, make 3 commits across a mini feature (add file → improve → fix typo), then paste `git log --oneline` into notes.

## Next

→ [09.2 Testing basics](./lesson-02-testing.md)
