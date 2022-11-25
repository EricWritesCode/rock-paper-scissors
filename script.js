// Randomly chooses a move for the computer
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

//Plays a single round of Rock Paper Scissors, logs result and returns winner
function playRound(playerSelection, computerSelection) {
  let playerMove = playerSelection.toLowerCase();

  if (playerMove === "rock") {
    switch (computerSelection) {
      case "rock":
        console.log("Tie!");
        return "tie";
      case "paper":
        console.log("Computer wins! Paper beats rock.");
        return "computer";
      case "scissors":
        console.log("You win! Rock beats scissors.");
        return "player";
    }
  } else if (playerMove === "paper") {
    switch (computerSelection) {
      case "rock":
        console.log("You win! Paper beats rock.");
        return "player";
      case "paper":
        console.log("Tie!");
        return "tie";
      case "scissors":
        console.log("Computer wins! Scissors beats paper.");
    }
  } else if (playerMove === "scissors") {
    switch (computerSelection) {
      case "rock":
        console.log("Computer wins! Rock beats scissors.");
        return "computer";
      case "paper":
        console.log("You win! Scissors beats paper.");
        return "player";
      case "scissors":
        console.log("Tie!");
        return "tie";
    }
  } else {
    console.log("Invalid move!");
    return "";
  }
}

function playGame() {
  let playerSelection;
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;
  let result = "";
  let roundCount = 1;

  for (let i = 5; i--; ) {
    playerSelection = prompt("Enter your move!");
    if (playerSelection === null || playerSelection === undefined) {
      console.log("No move entered, ending game.");
      return;
    }

    computerSelection = getComputerChoice();
    console.log(`You played ${playerSelection}`);
    console.log(`Computer played ${computerSelection}`);
    result = playRound(playerSelection, computerSelection);

    //increments score based on round result
    switch (result) {
      case "player":
        playerScore++;
        break;
      case "computer":
        computerScore++;
        break;
      default:
        break;
    }

    console.log(`Round ${roundCount}: ${playerScore} to ${computerScore}`);
    roundCount += 1;

    //checks for early winner
    if (playerScore >= 3) {
      console.log("You win the game!");
      return;
    } else if (computerScore >= 3) {
      console.log("Computer wins the game!");
      return;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }

  return;
}

playGame();
