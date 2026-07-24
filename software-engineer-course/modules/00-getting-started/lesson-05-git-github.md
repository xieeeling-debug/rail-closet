# 00.5 — Git and GitHub Basics

## You will learn

- What Git saves for you  
- Clone, status, add, commit  
- How GitHub relates to offline learning  

## Why Git?

Git is a **time machine for your project**.

- Save snapshots (**commits**)  
- Undo mistakes  
- Collaborate without overwriting blindly  

**GitHub** is a website that stores Git projects online.  
**Offline use:** after `git clone` or ZIP download, lesson files live on your disk.

## Core ideas

| Word | Meaning |
|------|---------|
| Repository | Project tracked by Git |
| Commit | A snapshot with a message |
| Branch | A line of work (later topic) |
| Remote | Copy on GitHub (`origin`) |
| Clone | Download a repo including history |

## First commands

Inside a project folder:

```bash
git status                 # what changed?
git add PROGRESS.md        # stage a file
git commit -m "Mark module 00 progress"
git log --oneline          # see history
```

### Clone this course (if you have Git)

```bash
git clone https://github.com/xieeeling-debug/rail-closet.git
cd rail-closet/software-engineer-course
```

## Commit message tips

Good:

- `Add terminal practice notes`  
- `Finish python lesson 02.2 exercises`  

Weak:

- `update`  
- `asdf`  

## Safety rule for beginners

Do not panic if Git prints a lot of text. Read the **first lines**.  
`git status` is your friend — run it often.

## Practice

1. Confirm Git works: `git --version`.  
2. In `learning-lab`, run:

```bash
git init
echo "# My learning lab" > README.md
git add README.md
git commit -m "Start personal learning lab"
```

3. Change README, `git add`, commit again with a new message.  
4. Run `git log --oneline`.

## Module 00 Checkpoint

- [ ] I can explain hardware vs software  
- [ ] I can create folders/files and write a path  
- [ ] I can navigate with `cd`, `ls`, `pwd`  
- [ ] I can open this course in VS Code  
- [ ] I made at least one Git commit  

## Next module

→ [Module 01 — Thinking Like a Programmer](../01-thinking-like-a-programmer/)
