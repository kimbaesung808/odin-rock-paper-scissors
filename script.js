/*
Create the game "Rock, Paper, Scissors". The game will be played against the computer by the user. 
Keep track of both the computer's and the user's scores. Write the logic to play one round and then five rounds.
*/

/*
CREATE function `getComputerChoice`
  RETURN "rock", "paper", or "scissors", randomly
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

/*
CREATE function `getHumanChoice`
  READ user input
  RETURN user input
*/
function getHumanChoice() {
  return prompt("rock, paper, or scissors?");
}

/*
CREATE function `playGame`
  INIT variables `computerScore` and `humanScore` with 0
  CREATE function `playRound`
    DEFINE parameters `computerChoice`, `humanChoice`
    MAKE `humanChoice` case-insensitive
    DETERMINE round winner
    DISPLAY winner in alert box
    INCREMENT winner's score
  FOR five rounds
    CALL `playRound`
  DETERMINE game winner
  PRINT game winner to console
*/
function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === "rock") {
      if (humanChoice === "paper") {
        alert("You won this round. Paper beats Rock.");
        humanScore++;
      } else if (humanChoice === "scissors") {
        alert("You lost this round. Rock beats Scissors.");
        computerScore++;
      } else {
        alert("It's a tie.");
      }
    } else if (computerChoice === "paper") {
      if (humanChoice === "scissors") {
        alert("You won this round. Scissors beats Paper.");
        humanScore++;
      } else if (humanChoice === "rock") {
        alert("You lost this round. Paper beats Rock.");
        computerScore++;
      } else {
        alert("It's a tie.");
      }
    } else {
      if (humanChoice === "rock") {
        alert("You won this round. Rock beats Scissors.");
        humanScore++;
      } else if (humanChoice === "paper") {
        alert("You lost this round. Scissors beats Paper.");
        computerScore++;
      } else {
        alert("It's a tie.");
      }
    }
  }

  for (let round = 1; round <= 5; round++) {
    playRound(getComputerChoice(), getHumanChoice());
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