const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("ComputerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoredisplay");
const computerscoreDisplay = document.getElementById("computerscoredisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerchoice) {
        result = "It's a tie!";
    }else{
        switch (playerChoice) {
            case "rock":
                result = computerchoice === "scissors" ? "You win!" : "You lose!";
                break;
            case "paper":
                result = computerchoice === "rock" ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = computerchoice === "paper" ? "You win!" : "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerchoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext", "blue");

    switch (result) {
        case "You win!":
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerscoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            resultDisplay.classList.add("redtext");
            computerScore++;
            computerscoreDisplay.textContent = computerScore;
            break;
        default:
            resultDisplay.classList.add("blue");
    }
}