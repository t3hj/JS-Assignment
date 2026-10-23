# Rock, Paper, Scissors vs Evil AI (JS Assignment 1)

A terminal-based JavaScript Rock, Paper, Scissors game where players fight against an Evil AI to save humanity and rescue Branko!

## Features & Implementation
- **Core Game Engine:** Features `computerPlay()`, `playRound()`, and a main `game()` loop tracking first-to-3 wins.
- **Input Sanitization:** Case-insensitive prompt handling that trims whitespace and re-prompts on invalid inputs without affecting scores or round counts.
- **Cancel Safety:** Safely terminates the game loop without throwing errors if the user cancels any prompt/confirm dialog.
- **Interactive Onboarding:** Two-step pre-game guide explaining browser console setup across Chrome, Opera, Brave, and Safari.

## How to Play
1. Clone this repository or open `index.html` in your web browser.
2. Follow the pre-game dialog prompts.
3. Open your Browser Console using the key shortcuts shown on screen:
   - **Chrome / Opera / Brave (Windows):** `F12` or `Ctrl + Shift + I`
   - **Chrome / Opera / Brave (Mac):** `Cmd + Option + I`
   - **Safari (Mac):** Enable Develop Menu in Settings > Advanced, then press `Cmd + Option + C`
4. Enter `Rock`, `Paper`, or `Scissors` in the browser prompt to battle the AI!