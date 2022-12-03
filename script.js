// score incremented
// score checked for winner
// if someone has five points, end game, create restart button

function appendLine(rDiv, text) {
  let newLine = document.createElement("p");
  newLine.innerText = text;
  rDiv.appendChild(newLine);
}

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
function playRound(playerInput) {
  let resultsDiv = document.getElementById("resultsLog");
  let computerSelection = getComputerChoice();

  if (playerInput === "rock") {
    switch (computerSelection) {
      case "rock":
        appendLine(resultsDiv, "Tie!");
        return "tie";
      case "paper":
        appendLine(resultsDiv, "Computer wins! Paper beats rock.");
        return "computer";
      case "scissors":
        appendLine(resultsDiv, "You win! Rock beats scissors.");
        return "player";
    }
  } else if (playerInput === "paper") {
    switch (computerSelection) {
      case "rock":
        appendLine(resultsDiv, "You win! Paper beats rock.");
        return "player";
      case "paper":
        appendLine(resultsDiv, "Tie!");
        return "tie";
      case "scissors":
        appendLine(resultsDiv, "Computer wins! Scissors beats paper.");
        return "computer";
    }
  } else if (playerInput === "scissors") {
    switch (computerSelection) {
      case "rock":
        appendLine(resultsDiv, "Computer wins! Rock beats scissors.");
        return "computer";
      case "paper":
        appendLine(resultsDiv, "You win! Scissors beats paper.");
        return "player";
      case "scissors":
        appendLine(resultsDiv, "Tie!");
        return "tie";
    }
  } else {
    // left over from when user could input text
    console.log("Invalid move!");
    return "";
  }
}

function checkScore() {}

function gameManager() {
  let playerScore = 0;
  let computerScore = 0;
  let result = "";
  let roundCount = 1;
  const buttons = Array.from(document.getElementsByTagName("button"));
  const roundDisplay = document.getElementById("roundNumber");
  const playerScoreBoard = document.getElementById("playerScore");
  const compScoreBoard = document.getElementById("compScore");

  // Creates event listeners for each selection button
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      result = playRound(element.id);
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
      // update scoreboard
      roundCount += 1;
      roundDisplay.innerText = roundCount;
      playerScoreBoard.innerText = playerScore;
      compScoreBoard.innerText = computerScore;
    });
  });

  // if (playerScore > computerScore) {
  //   console.log("You win the game!");
  // } else if (computerScore > playerScore) {
  //   console.log("Computer wins the game!");
  // } else {
  //   console.log("It's a tie!");
  // }

  return;
}

gameManager();
