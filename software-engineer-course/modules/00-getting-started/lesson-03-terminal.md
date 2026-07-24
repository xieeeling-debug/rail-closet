# 00.3 — The Terminal (Command Line)

## You will learn

- Why engineers use a terminal  
- Navigation commands  
- Running programs  

The **terminal** (also called shell, console, command prompt) is a text window where you type commands instead of clicking.

Scary at first. Extremely useful forever.

## Open a terminal

- **VS Code:** Terminal → New Terminal  
- **macOS:** Terminal app  
- **Windows:** PowerShell or Windows Terminal  
- **Linux:** Terminal  

## Commands to memorize first

These work on macOS/Linux (and Git Bash on Windows). PowerShell is similar for many of them.

| Command | Meaning |
|---------|---------|
| `pwd` | Print working directory (where am I?) |
| `ls` | List files (`dir` on Windows CMD) |
| `cd foldername` | Change directory (enter folder) |
| `cd ..` | Go up one folder |
| `mkdir name` | Make a new folder |
| `touch file.txt` | Create empty file (mac/Linux) |
| `clear` | Clear the screen |

### Try this sequence

```bash
pwd
mkdir learning-lab
cd learning-lab
mkdir python web notes
ls
cd python
pwd
cd ..
pwd
```

## Running Python

```bash
python3 hello.py
```

On some Windows installs:

```bash
python hello.py
```

## Common beginner mistakes

- Typing a command while in the **wrong folder**  
- Misspelling a file name  
- Using `CD` vs `cd` (usually case does not matter on Windows, does on Linux)  

## Practice

1. Navigate into this course folder using `cd`.  
2. `ls` and find `START_HERE.md`.  
3. `cd modules/00-getting-started` and list lessons.  
4. Create `learning-lab/notes/terminal-practice.md` and write which commands you used.

## Next

→ [00.4 Editors and Markdown](./lesson-04-editors-markdown.md)
