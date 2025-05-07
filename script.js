/*
Create the game "Rock, Paper, Scissors". The game will be played against the computer by the user. 
Keep track of both the computer's and the user's scores. Write the logic to play one round and then five rounds.

CREATE variables `computerScore`, `humanScore` in global scope
INIT `computerScore` and `humanScore` with 0

WRITE logic to play one round
CREATE function `playRound`
  DEFINE parameters `computerChoice`, `humanChoice`
  MAKE 'humanChoice' case-insensitive
  DETERMINE winner
  PRINT winner to console
  INCREMENT winner's score

WRITE logic to play five rounds
EDIT 'playRound' or add helper function(s)
CREATE function `playGame`
  MOVE `playRound`, `computerScore`, `humanScore` declarations here
  FOR five rounds
    CALL `playRound`
    INCREMENT winner's score
  DETERMINE winner
  PRINT winner to console
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