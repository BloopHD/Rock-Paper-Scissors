const choices = ["Rock", "Paper", "Scissors"];
const numberGames = 5;
let gamesPlayed = 0;
let playerWinCount = 0;
let computerWinCount = 0;

game();

// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();

function game() {
    while (gamesPlayed < numberGames) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        let results = playRound(playerSelection, computerSelection);

        if (results == 0) {
            console.log("Tie!");
        } else {
            if (results == 1) {
                console.log("You win! " + playerSelection + " beats " + computerSelection + "!");
                playerWinCount++;
            } else if (results == -1) {
                console.log("You lose! " + computerSelection + " beats " + playerSelection + "!");
                computerWinCount++;
            }
            gamesPlayed++;
        }
    }

    if (playerWinCount > computerWinCount) {
        console.log("Winner! Score: " + playerWinCount + " to " + computerWinCount);
    } else if (playerWinCount < computerWinCount) {
        console.log("Loser! Score: " + computerWinCount + " to " + playerWinCount);
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {

        if (computerSelection == "Rock") {

            return 0;
        } else if (computerSelection == "Paper") {

            return -1;
        } else {

            return 1;
        }
    } else if (playerSelection == "Paper") {

        if (computerSelection == "Paper") {

            return 0;
        } else if (computerSelection == "Scissors") {

            return -1;
        } else {

            return 1;
        }
    } else if (playerSelection == "Scissors") {

        if (computerSelection == "Scissors") {

            return 0;
        } else if (computerSelection == "Rock") {

            return -1;
        } else {

            return 1;
        }
    }
}

function getComputerChoice() {

    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {

    let choice = prompt("Choose Rock, Paper, or Scissors!");
    let formattedChoice = formatePlayerChoice(choice);

    while (!choices.includes(formattedChoice)) {
        console.log(choice + " is not a valid input, try again!");
        choice = prompt("Choose Rock, Paper, or Scissors!");
        formattedChoice = formatePlayerChoice(choice);
    }

    return formattedChoice;
}

function formatePlayerChoice(s) {

    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

