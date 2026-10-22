// ============================================================================
// YOUR CONTRIBUTION: CORE GAME ENGINE (computerPlay, playRound, game)
// ============================================================================

/**
 * Randomly generates the computer's choice.
 * @returns {string} 'Rock', 'Paper', or 'Scissors'
 */
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * Compares player choice against computer choice for a single round.
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
 * Main game loop. Coordinates pre-game guide, round loops, score keeping,
 * input validation calls, and winner announcements.
 */
function game() {
    // 1. Run Ulugbek's onboarding guide before starting
    showPreGameGuide();

    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;

    // Loop continues until either player or computer reaches 3 wins
    while (playerScore < 3 && computerScore < 3) {
        console.log(`\n--- ROUND ${roundNumber} ---`);

        // 2. Obtain valid input using Luna's input handler
        const playerSelection = getValidPlayerChoice();

        // Handle safe cancellation if user clicks Cancel
        if (playerSelection === null) {
            console.log("Game cancelled by player. The Evil AI remains unbeaten!");
            alert("Game session terminated safely.");
            return;
        }

        const computerSelection = computerPlay();
        console.log(`Player choice: ${playerSelection}`);
        console.log(`Evil AI choice: ${computerSelection}`);

        // 3. Evaluate round outcome
        const result = playRound(playerSelection, computerSelection);

        if (result === "player") {
            playerScore++;
            console.log(`ROUND WIN: ${playerSelection} beats ${computerSelection}!`);
        } else if (result === "computer") {
            computerScore++;
            console.log(`ROUND LOSS: ${computerSelection} beats ${playerSelection}!`);
        } else {
            console.log(`ROUND DRAW: Both chose ${playerSelection}. No points awarded.`);
        }

        console.log(`SCORE BOARD -> Player: ${playerScore} | Evil AI: ${computerScore}`);
        roundNumber++;
    }

    // 4. Final winner announcement
    console.log("\n==============================================");
    if (playerScore === 3) {
        console.log("VICTORY! You defeated the Evil AI and saved humanity!");
        alert("VICTORY! You defeated the Evil AI with 3 wins!");
    } else {
        console.log("DEFEAT! The Evil AI reached 3 wins and conquered the system.");
        alert("DEFEAT! The Evil AI took over the system.");
    }
    console.log("==============================================");
}


// ============================================================================
// ULGBEK'S PART: UX, ONBOARDING & CONSOLE GUIDE
// ============================================================================

function showPreGameGuide() {
    alert(
        "CRITICAL ALERT: The Evil AI has hijacked the system!\n\n" +
        "REQUIRED: You MUST open your Browser Console to play this game.\n" +
        "• Chrome / Edge / Firefox: Press F12 or Ctrl + Shift + I (Cmd + Option + I on Mac)\n" +
        "• Safari: Go to Settings > Advanced > Enable Developer Menu, then press Cmd + Option + C\n\n" +
        "All round updates, choices, and scores will be logged in the console terminal."
    );
    console.log("=== EVIL AI DEFENSE TERMINAL ONLINE ===");
    console.log("Win 3 rounds to restore system control. Good luck!");
}


// ============================================================================
// LUNA'S PART: INPUT SANITIZATION & CANCEL SAFETY
// ============================================================================

function getValidPlayerChoice() {
    const validChoices = ["rock", "paper", "scissors"];

    while (true) {
        const input = prompt("Enter your choice (Rock, Paper, or Scissors) or click Cancel to exit:");

        // Safe exit on prompt cancellation
        if (input === null) {
            return null;
        }

        const cleanedInput = input.trim().toLowerCase();

        if (validChoices.includes(cleanedInput)) {
            // Capitalize for consistent console output
            return cleanedInput.charAt(0).toUpperCase() + cleanedInput.slice(1);
        }

        alert("Invalid choice! Please enter Rock, Paper, or Scissors. Invalid attempts do not count.");
    }
}


// ============================================================================
// EXECUTION
// ============================================================================

// Run the game automatically when page loads
game();