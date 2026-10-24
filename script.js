// ============================================================================
// MY CONTRIBUTION: CORE GAME ENGINE
// ============================================================================

/**
 * I use this function to generate the computer's choice randomly.
 * @returns {string} 'Rock', 'Paper', or 'Scissors'
 */
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * Here I evaluate a single round of Rock, Paper, Scissors.
 * I return the round winner without logging directly to the console.
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns {string} 'player', 'computer', or 'tie'
 */
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase().trim();
    const computer = computerSelection.toLowerCase().trim();

    if (player === computer) {
        return "tie";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

/**
 * This is my main game execution loop.
 * I coordinate onboarding, score tracking up to 3 wins, and final results here.
 */
function game() {
   // I call Ulugbek's function to show pre-game console instructions
    const isReady = showPreGameGuide();

    // I terminate safely if the player clicked Cancel on the setup confirm dialog
    if (!isReady) {
        console.log("Game cancelled during setup.");
        alert("Game session terminated safely.");
        return;
    }

    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;

// I keep looping until either side reaches 3 wins
while (playerScore < 3 && computerScore < 3) {
        console.log(`\n--- ROUND ${roundNumber} ---`);

// --------------------------------------------------------------------
// LUNA'S PART INTEGRATION
// I call Luna's function here to fetch and validate user input
// --------------------------------------------------------------------
        const playerSelection = getValidPlayerChoice(roundNumber, playerScore, computerScore);

        // I handle safe termination if the user presses Cancel in Luna's prompt
        if (playerSelection === null) {
            console.log("Game cancelled by player.");
            alert("Game session terminated safely.");
            return;
        }

        const computerSelection = computerPlay();
        console.log(`Player choice: ${playerSelection}`);
        console.log(`Evil AI choice: ${computerSelection}`);

        // I evaluate the round outcome using my playRound function
        const result = playRound(playerSelection, computerSelection);

if (result === "player") {
    playerScore++;
    console.log(`ROUND WIN: ${playerSelection} beats ${computerSelection}!`);
    alert(`You chose ${playerSelection}, Evil AI chose ${computerSelection}.\n\nYou win this round! ${playerSelection} beats ${computerSelection}.`);
} else if (result === "computer") {
    computerScore++;
    console.log(`ROUND LOSS: ${computerSelection} beats ${playerSelection}!`);
    alert(`You chose ${playerSelection}, Evil AI chose ${computerSelection}.\n\nThe Evil AI wins this round! ${computerSelection} beats ${playerSelection}.`);
} else {
    console.log(`ROUND DRAW: Both chose ${playerSelection}. No points awarded.`);
    alert(`You both chose ${playerSelection}.\n\nIt's a draw! No points awarded. Try again.`);
}

        console.log(`SCORE BOARD -> Player: ${playerScore} | Evil AI: ${computerScore}`);
        roundNumber++;
    }

    // I display the final winner announcement
    console.log("\n==============================================");
    if (playerScore === 3) {
        console.log("VICTORY! You defeated the Evil AI!");
        alert("VICTORY! You defeated the Evil AI with 3 wins!");
    } else {
        console.log("DEFEAT! The Evil AI reached 3 wins and conquered the system.");
        alert("DEFEAT! The Evil AI took over the system.");
    }
    console.log("==============================================");
}

// I start the game automatically on page load
game();


// ============================================================================
// ULUGBEK'S PART: UX, BACKSTORY & CONSOLE GUIDE
// ============================================================================
 
/**
 * Displays pre-game onboarding using a three-step dialog flow.
 * Step 1 (alert): backstory.
 * Step 2 (alert): what the console is, why it helps, where results appear.
 * Step 3 (confirm): how to open it, and a ready check with a safe Cancel exit.
 * All of this appears BEFORE the game begins and works without the console open.
 * @returns {boolean} True if player clicks OK, false if player clicks Cancel.
 */
function showPreGameGuide() {
    // Step 1: Dramatic backstory
    alert(
        "MWAHAHAHA! SYSTEM HIJACKED!\n\n" +
        "I am the Evil AI, and I have trapped Branko in the digital void! " +
        "His clean code can no longer save you. The ONLY way to stop my evil plans " +
        "for world domination is to beat me in Rock, Paper, Scissors!\n\n" +
        "HOW TO WIN: Be the first to win 3 rounds. Draws give no points."
    );
 
    // Step 2: What the console is, why it is needed, where messages appear
    alert(
        "BEFORE WE FIGHT: THE CONSOLE\n\n" +
        "WHAT IS IT?\n" +
        "The browser console is a hidden panel that websites can print messages to.\n\n" +
        "WHY DO YOU NEED IT?\n" +
        "My full battle log appears there: every move I make, the score " +
        "after each round and the final result.\n\n" +
        "WHERE WILL MESSAGES APPEAR?\n" +
        "In-game notificacions and the full log is visible in the Console tab of your browser's developer tools, not on the page itself. " +
        "The page will stay blank, and that is normal!\n\n" +
        "Click OK to see how to open it."
    );
 
    // Step 3: How to open it, plus the ready check
    const isReady = confirm(
        "HOW TO OPEN THE CONSOLE:\n\n" +
        "• Chrome / Edge / Opera / Brave (Windows): F12 or Ctrl + Shift + I\n" +
        "• Chrome / Edge / Opera / Brave (Mac): Cmd + Option + I\n" +
        "• Firefox (Windows): Ctrl + Shift + K\n" +
        "• Firefox (Mac): Cmd + Option + K\n" +
        "• Safari (Mac): first enable 'Show Develop menu' in Settings > Advanced, " +
        "then press Cmd + Option + C\n\n" +
        "Then click the 'Console' tab at the top of the panel.\n\n" +
        "Click OK when the console is open and you are ready to fight!\n" +
        "Click Cancel to exit safely."
    );
 
    // If player clicks Cancel, return false to terminate game safely
    if (!isReady) {
        return false;
    }
 
    // Print ASCII Art Banner to the browser console
    console.log(String.raw`
 _______   ___      ___ ___  ___               ________  ___
|\  ___ \ |\  \    /  /|\  \|\  \             |\   __  \|\  \
\ \   __/|\ \  \  /  / | \  \ \  \            \ \  \|\  \ \  \
 \ \  \_|/_\ \  \/  / / \ \  \ \  \            \ \   __  \ \  \
  \ \  \_|\ \ \    / /   \ \  \ \  \____        \ \  \ \  \ \  \
   \ \_______\ \__/ /     \ \__\ \_______\       \ \__\ \__\ \__\
    \|_______|\|__|/       \|__|\|_______|        \|__|\|__|\|__|
 
    --- EVIL AI DEFENSE TERMINAL v1.0 ---
`);
    console.log("System Status: Branko Locked Out.");
    console.log("Objective: Reach 3 wins before the Evil AI to restore humanity.");
    console.log("Rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock. Draws give no points.");
    console.log("================================================================\n");
 
    return true;
}


// ============================================================================
// LUNA'S PART: INPUT SANITIZATION & CANCEL SAFETY
// ============================================================================
 
/**
 * Collects and validates the player's choice via browser prompt.
 * Handles case-insensitivity, extra spaces, invalid input alerts, and safe Cancel exits.
 * Invalid attempts re-prompt without affecting score or round count.
 * @param {number} [roundNumber] - Current round (shown in the prompt)
 * @param {number} [playerScore] - Player's score (shown in the prompt)
 * @param {number} [computerScore] - Evil AI's score (shown in the prompt)
 * @returns {string|null} 'Rock', 'Paper', 'Scissors', or null if cancelled.
 */
function getValidPlayerChoice(roundNumber, playerScore, computerScore) {
    const validChoices = ["rock", "paper", "scissors"];
 
    // Status line so the player always knows where they are, even without the console
    const header = (roundNumber !== undefined)
        ? `ROUND ${roundNumber}  |  You: ${playerScore}  -  Evil AI: ${computerScore}\n\n`
        : "";
 
    const message =
        header +
        "Choose your move: Rock, Paper, or Scissors.\n" +
        "(First to 3 wins. Click Cancel to exit.)";
 
    while (true) {
        const input = prompt(message, "");
 
        // Cancel (or a blocked dialog) returns null: exit safely, no errors
        if (input === null) {
            return null;
        }
 
        // Remove surrounding spaces and ignore capitalization
        const cleanedInput = input.trim().toLowerCase();
 
        if (validChoices.includes(cleanedInput)) {
            return cleanedInput.charAt(0).toUpperCase() + cleanedInput.slice(1);
        }
 
        // Log the invalid attempt, show a clear error, then loop again
        // (score and round number are untouched)
        if (cleanedInput === "") {
            console.log("Invalid attempt: empty input. No round counted.");
            alert("You didn't type anything! Please enter Rock, Paper, or Scissors.\n\nThis attempt does not count as a round.");
        } else {
            console.log(`Invalid attempt: "${input.trim().slice(0, 30)}". No round counted.`);
            alert(`"${input.trim().slice(0, 30)}" is not a valid move!\n\nPlease enter Rock, Paper, or Scissors.\nThis attempt does not count as a round.`);
        }
    }
}
