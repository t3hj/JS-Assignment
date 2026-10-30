// Core game engine
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Returns "player", "computer", or "tie".
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

function game() {
    const isReady = showPreGameGuide();

    if (!isReady) {
        console.log("Game cancelled during setup.");
        alert("Game session terminated safely.");
        return;
    }

    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;

while (playerScore < 3 && computerScore < 3) {
        console.log(`\n--- ROUND ${roundNumber} ---`);

        const playerSelection = getValidPlayerChoice(roundNumber, playerScore, computerScore);

        if (playerSelection === null) {
            console.log("Game cancelled by player.");
            alert("Game session terminated safely.");
            return;
        }

        const computerSelection = computerPlay();
        console.log(`Player choice: ${playerSelection}`);
        console.log(`Evil AI choice: ${computerSelection}`);

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

    console.log("\n==============================================");
    if (playerScore === 3) {
        console.log("VICTORY! You defeated the Evil AI, saved Branko, and secured your certification!");
        alert("VICTORY! You defeated the Evil AI with 3 wins! Branko is saved and your certification is secured!");
    } else {
        console.log("DEFEAT! The Evil AI reached 3 wins and conquered the system. No more certificate for you!");
        alert("DEFEAT! The Evil AI took over the systemm. Branko is trapped and your certification is lost!");
    }
    console.log("==============================================");
}

game();

// Pre-game guide (Ulugbek). Returns false when setup is cancelled.
function showPreGameGuide() {
    alert(
        "MWAHAHAHA! SYSTEM HIJACKED!\n\n" +
        "I am the Evil AI, and I have trapped Branko in the digital void! " +
        "You MUST rescue him if you want to take more courses and receive your certification! " +
        "His clean code can no longer save you. The ONLY way to stop my evil plans " +
        "for world domination is to beat me in Rock, Paper, Scissors!\n\n" +
        "HOW TO WIN: Be the first to win 3 rounds. Draws give no points."
    );
 
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
 
    if (!isReady) {
        return false;
    }
 
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
    console.log("Objective: Reach 3 wins before the Evil AI to rescue Branko and claim your certificate.");
    console.log("Rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock. Draws give no points.");
    console.log("================================================================\n");
 
    return true;
}

// Input validation (Luna). Invalid attempts do not count as rounds; Cancel returns null.
function getValidPlayerChoice(roundNumber, playerScore, computerScore) {
    const validChoices = ["rock", "paper", "scissors"];
 
    const header = (roundNumber !== undefined)
        ? `ROUND ${roundNumber}  |  You: ${playerScore}  -  Evil AI: ${computerScore}\n\n`
        : "";
 
    const message =
        header +
        "Choose your move: Rock, Paper, or Scissors.\n" +
        "(First to 3 wins. Click Cancel to exit.)";
 
    while (true) {
        const input = prompt(message, "");
 
        if (input === null) {
            return null;
        }
 
        const cleanedInput = input.trim().toLowerCase();
 
        if (validChoices.includes(cleanedInput)) {
            return cleanedInput.charAt(0).toUpperCase() + cleanedInput.slice(1);
        }
 
        if (cleanedInput === "") {
            console.log("Invalid attempt: empty input. No round counted.");
            alert("You didn't type anything! Please enter Rock, Paper, or Scissors.\n\nThis attempt does not count as a round.");
        } else {
            console.log(`Invalid attempt: "${input.trim().slice(0, 30)}". No round counted.`);
            alert(`"${input.trim().slice(0, 30)}" is not a valid move!\n\nPlease enter Rock, Paper, or Scissors.\nThis attempt does not count as a round.`);
        }
    }
}
