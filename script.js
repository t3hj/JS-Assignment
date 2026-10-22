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
    // ------------------------------------------------------------------------
    // ULUGBEK'S PART INTEGRATION
    // I call Ulugbek's function here to show pre-game console instructions
    // ------------------------------------------------------------------------
    showPreGameGuide();

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
        const playerSelection = getValidPlayerChoice();

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
        } else if (result === "computer") {
            computerScore++;
            console.log(`ROUND LOSS: ${computerSelection} beats ${playerSelection}!`);
        } else {
            console.log(`ROUND DRAW: Both chose ${playerSelection}. No points awarded.`);
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
// ULUGBEK'S PART (UX, BACKSTORY & CONSOLE GUIDE)
// ============================================================================
// ULUGBEK: Define your function showPreGameGuide() here.
// It must explain why and how to open the browser console before the game starts.


// ============================================================================
// LUNA'S PART (INPUT VALIDATION & CANCEL SAFETY)
// ============================================================================
// LUNA: Define your function getValidPlayerChoice() here.
// It must collect input via prompt(), handle trimming/case-insensitivity, display alerts for invalid input without changing score, and return null if Cancel is pressed.