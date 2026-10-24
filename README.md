# Rock, Paper, Scissors vs Evil AI (JS Assignment 1)

A terminal-based JavaScript Rock, Paper, Scissors game where players fight against an Evil AI to save humanity and rescue Branko!

## Features & Implementation
- **Core Game Engine:** Features `computerPlay()`, `playRound()`, and a main `game()` loop tracking first-to-3 wins.
- **Input Sanitization:** Case-insensitive prompt handling that trims whitespace and re-prompts on invalid inputs without affecting scores or round counts.
- **Cancel Safety:** Safely terminates the game loop without throwing errors if the user cancels any prompt/confirm dialog.
- **Interactive Onboarding:** Three-step pre-game guide explaining what the browser console is, why it helps, where messages appear, and how to open it in Chrome, Edge, Opera, Brave, Firefox and Safari.
- **Round Result Dialogs:** After every round, a pop-up shows both choices, who won (or that it was a draw) and the current score, so the game is fully playable even without the console.
- **Invalid Attempt Logging:** Invalid entries are logged to the console and never count as a round.

## How to Play
1. Clone this repository or open `index.html` in your web browser.
2. Follow the pre-game dialog prompts.
3. Open your Browser Console for the full battle log (the pre-game dialogs show how):
   * Chrome / Edge / Opera / Brave (Windows): `F12` or `Ctrl + Shift + I`
   * Chrome / Edge / Opera / Brave (Mac): `Cmd + Option + I`
   * Firefox (Windows): `Ctrl + Shift + K`
   * Firefox (Mac): `Cmd + Option + K`
   * Safari (Mac): Enable the Develop menu in Settings > Advanced, then press `Cmd + Option + C`
4. Enter `Rock`, `Paper`, or `Scissors` in the prompt (capitalization and extra spaces don't matter). First to 3 round wins takes the game. Draws and invalid entries don't count.
