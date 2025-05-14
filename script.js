/*
This is a basic implementation of the game "Rock, Paper, Scissors". The game 
is played against the computer by the user.
*/

function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice >= 0 && computerChoice < 0.33) {
    return "rock";
  } else if (computerChoice >= 0.33 && computerChoice < 0.66) {
    return "paper";
  }
  return "scissors";
}

function getHumanChoice() {
  return prompt("rock, paper, or scissors?");
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === "rock") {
      if (humanChoice === "paper") {
        console.log("You won this round. Paper beats Rock.");
        humanScore++;
      } else if (humanChoice === "scissors") {
        console.log("You lost this round. Rock beats Scissors.");
        computerScore++;
      } else {
        console.log("It's a tie.");
      }
    } else if (computerChoice === "paper") {
      if (humanChoice === "scissors") {
        console.log("You won this round. Scissors beats Paper.");
        humanScore++;
      } else if (humanChoice === "rock") {
        console.log("You lost this round. Paper beats Rock.");
        computerScore++;
      } else {
        console.log("It's a tie.");
      }
    } else {
      if (humanChoice === "rock") {
        console.log("You won this round. Rock beats Scissors.");
        humanScore++;
      } else if (humanChoice === "paper") {
        console.log("You lost this round. Scissors beats Paper.");
        computerScore++;
      } else {
        console.log("It's a tie.");
      }
    }
  }

  if (computerScore > humanScore) {
    console.log("The computer won this game.");
  } else if (humanScore > computerScore) {
    console.log("You won this game.");
  } else {
    console.log("No one won this game. It's a tie.");
  }
}

playGame();