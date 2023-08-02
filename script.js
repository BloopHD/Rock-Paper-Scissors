const choices = ["Rock", "Paper", "Scissors"];
const numberGames = 5;
let gamesPlayed = 0;
let playerWinCount = 0;
let computerWinCount = 0;

setUp();

// Sets up page's buttons be able to accept player's choices.
function setUp() {

    const rock = document.querySelector('.rock');
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    rock.addEventListener('click', play);
    paper.addEventListener('click', play);
    scissors.addEventListener('click', play);
}

// Ends game by disabling choices, and adding reset button.
function gameOver() {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    let againDiv = document.getElementById("again");
    let againButt = document.createElement("BUTTON");
    let againText = document.createTextNode("Again?");

    againButt.appendChild(againText);
    againDiv.appendChild(againButt);

    againButt.addEventListener('click', () => { window.location.reload(); });
}

// Accepts the player and computers selection and decides who wins.
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

// Returns computer's choice.
function getComputerChoice() {

    return choices[Math.floor(Math.random() * choices.length)];
}

// Called when button choice is selected.
// Plays round and then calls handleResults.
function play(choice) {

    const computerSelection = getComputerChoice();
    const playerSelection = formatePlayerChoice(choice.target.className);
    const results  = playRound(playerSelection, computerSelection);

    handleResults(results, playerSelection, computerSelection);

}

// Handles the rounds results and displays them.
// Call's gameOver if the number of games won by either the player or computer = number of games to win.
function handleResults(results, playerSelection, computerSelection) {

    let display = "";

    if (results == 0) {

        display = ("Tie! " + playerSelection + " ties " + computerSelection + "!");

    } else {

        if (results == 1) {

            display = ("You win this round! " + playerSelection + " beats " + computerSelection + "!");
            playerWinCount++;

        } else if (results == -1) {

            display = ("You lose this round! " + computerSelection + " beats " + playerSelection + "!");
            computerWinCount++;

        }
        gamesPlayed++;
    }

    document.getElementById("results").innerHTML = display;
    document.getElementById("player-count").innerHTML = playerWinCount;
    document.getElementById("computer-count").innerHTML = computerWinCount;

    if (playerWinCount >= numberGames || computerWinCount >= numberGames) {

        if (playerWinCount > computerWinCount) {

            document.getElementById("header").innerHTML = "WINNER!";
            document.getElementById("results").innerHTML =  "You win! " + playerWinCount + " to " + computerWinCount;

        } else if (playerWinCount < computerWinCount) {

            document.getElementById("header").innerHTML = "LOSER!";
            document.getElementById("results").innerHTML =  "You lose! " + computerWinCount + " to " + playerWinCount;

        }

        gameOver();
    } 
}

// Formates the players choice (the button class names), to be aesthetic.
function formatePlayerChoice(s) {

    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

