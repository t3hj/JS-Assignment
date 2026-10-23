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
// ULUGBEK'S PART: UX, BACKSTORY & CONSOLE GUIDE
// ============================================================================

/**
 * Displays pre-game onboarding using a two-step dialog flow.
 * Uses alert() for the backstory and confirm() for console setup and player readiness.
 * @returns {boolean} True if player clicks OK, false if player clicks Cancel.
 */
function showPreGameGuide() {
    // Step 1: Dramatic backstory alert
    alert(
        "MWAHAHAHA! SYSTEM HIJACKED!\n\n" +
        "I am the Evil AI, and I have trapped Branko in the digital void! " +
        "His clean code can no longer save you. The ONLY way to stop my evil plans " +
        "for world domination is to beat me in Rock, Paper, Scissors!"
    );

    // Step 2: Technical console setup confirmation
    const isReady = confirm(
        "CRITICAL INSTRUCTION:\n" +
        "You MUST open your Browser Console to see match results and fight back!\n\n" +
        "HOW TO OPEN THE CONSOLE:\n" +
        "• Chrome / Opera / Brave (Windows): Press F12 or Ctrl + Shift + I\n" +
        "• Chrome / Opera / Brave (Mac): Press Cmd + Option + I\n" +
        "• Safari (Mac): Enable 'Develop Menu' in Settings > Advanced, then press Cmd + Option + C\n\n" +
        "Click OK if you have opened your console and are ready to play!\n" +
        "Click Cancel to exit safely."
    );

    // If player clicks Cancel, return false to terminate game safely
    if (!isReady) {
        return false;
    }

    // Print ASCII Art Banner to the browser console
    console.log(
`
 _______   ___      ___ ___  ___               ________  ___     
|\  ___ \ |\  \    /  /|\  \|\  \             |\   __  \|\  \    
\ \   __/|\ \  \  /  / | \  \ \  \            \ \  \|\  \ \  \   
 \ \  \_|/_\ \  \/  / / \ \  \ \  \            \ \   __  \ \  \  
  \ \  \_|\ \ \    / /   \ \  \ \  \____        \ \  \ \  \ \  \ 
   \ \_______\ \__/ /     \ \__\ \_______\       \ \__\ \__\ \__\
    \|_______|\|__|/       \|__|\|_______|        \|__|\|__|\|__|
                                                                 
    --- EVIL AI DEFENSE TERMINAL v1.0 ---
`
    );
    console.log("System Status: Branko Locked Out.");
    console.log("Objective: Reach 3 wins before the Evil AI to restore humanity.");
    console.log("================================================================\n");

    return true;
}


// ============================================================================
// LUNA'S PART: INPUT SANITIZATION & CANCEL SAFETY
// ============================================================================

/**
 * Collects and validates the player's choice via browser prompt.
 * Handles case-insensitivity, extra spaces, invalid input alerts, and safe Cancel exits.
 * @returns {string|null} Capitalized valid selection ('Rock', 'Paper', 'Scissors') or null if cancelled.
 */
function getValidPlayerChoice() {
    const validChoices = ["rock", "paper", "scissors"];

    while (true) {
        const input = prompt("Choose your move: Rock, Paper, or Scissors (or click Cancel to exit):");

        // Handle Cancel button press safely without producing console errors
        if (input === null) {
            return null;
        }

        // Clean input: remove whitespace and convert to lower case for case-insensitive checking
        const cleanedInput = input.trim().toLowerCase();

        // Validate selection against allowed choices
        if (validChoices.includes(cleanedInput)) {
            // Return choice with first letter capitalized
            return cleanedInput.charAt(0).toUpperCase() + cleanedInput.slice(1);
        }

        // Display clear error message on invalid input and re-prompt without altering score or round count
        alert("Invalid choice! Please enter Rock, Paper, or Scissors. Invalid attempts do not count as a round.");
    }
}