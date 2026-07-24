# 00.2 — Files, Folders, and Paths

## You will learn

- How projects are organized on disk  
- Absolute vs relative paths  
- Why naming matters  

## Folders are boxes; files are papers

A coding project is usually a **folder** containing many **files**:

```text
my-website/
  index.html
  styles.css
  script.js
  images/
    photo.jpg
```

Python projects look similar:

```text
gradebook/
  main.py
  data/
    scores.csv
  README.md
```

## Path = address of a file

**Absolute path** — full address from the system root:

- macOS/Linux: `/Users/jessie/Documents/course/START_HERE.md`  
- Windows: `C:\Users\jessie\Documents\course\START_HERE.md`

**Relative path** — address from where you currently are:

- If you are inside `course/`, then `START_HERE.md` is enough.  
- `modules/00-getting-started/README.md` means “go into modules, then …”

## Extensions tell the type

| Extension | Meaning |
|-----------|---------|
| `.md` | Markdown (lessons) |
| `.py` | Python |
| `.html` | Web page |
| `.css` | Styles |
| `.js` | JavaScript |
| `.json` | Data config |
| `.csv` | Spreadsheet-like data |

## Good naming habits

- Use lowercase and hyphens or underscores: `lesson-01.md`, `my_script.py`  
- Avoid spaces in project file names when possible  
- Be descriptive: `average_scores.py` beats `asdf.py`  

## Practice

1. On your computer, create folder `learning-lab`.  
2. Inside it, create folders `python`, `web`, `notes`.  
3. Create empty files: `notes/day1.md`, `python/hello.py`.  
4. Write the **full path** to `hello.py` in `day1.md`.

## Next

→ [00.3 The terminal](./lesson-03-terminal.md)
