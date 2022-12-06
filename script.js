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

function updateScoreboard(gameStats) {
  const roundDisplay = document.getElementById("round-number");
  const playerScoreBoard = document.getElementById("player-score");
  const compScoreBoard = document.getElementById("comp-score");

  roundDisplay.innerText = gameStats.roundCount;
  playerScoreBoard.innerText = gameStats.playerScore;
  compScoreBoard.innerText = gameStats.computerScore;
}

//takes in player's move, logs result and returns winner
function judgeRound(resultsDiv, playerInput) {
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

function playRound(allButtons, button, gameStats) {
  const resultsDiv = document.getElementById("div-results");
  let result = "";

  result = judgeRound(resultsDiv, button.id);
  resultsDiv.scrollTop = resultsDiv.scrollHeight;

  switch (result) {
    case "player":
      gameStats.playerScore += 1;
      break;
    case "computer":
      gameStats.computerScore += 1;
      break;
    default:
      break;
  }

  gameStats.roundCount += 1;
  updateScoreboard(gameStats);
  checkScore(gameStats, allButtons, resultsDiv);
}

function checkScore(gameStats, allButtons, resultsDiv) {
  if (gameStats.playerScore > 4) {
    appendLine(resultsDiv, "Game Over: You win!");
    resultsDiv.scrollTop = resultsDiv.scrollHeight;
    allButtons.forEach((element) => (element.style.pointerEvents = "none"));
  } else if (gameStats.computerScore > 4) {
    appendLine(resultsDiv, "Game Over: Computer wins!");
    resultsDiv.scrollTop = resultsDiv.scrollHeight;
    allButtons.forEach((element) => (element.style.pointerEvents = "none"));
  }
}

function restartGame(buttons, gameStats) {
  const resultsDiv = document.getElementById("div-results");
  for (item in gameStats) {
    gameStats[item] = 0;
  }
  updateScoreboard(gameStats);
  buttons.forEach((element) => (element.style.pointerEvents = "auto"));
  while (resultsDiv.firstChild) {
    resultsDiv.removeChild(resultsDiv.firstChild);
  }
}

function gameManager() {
  let gameStats = {
    playerScore: 0,
    computerScore: 0,
    roundCount: 0,
  };
  const buttons = Array.from(
    document.querySelectorAll(".buttons-choice button")
  );
  const restartButton = document.getElementById("btn-restart");

  let choice_handler = () => playRound(buttons, event.target, gameStats);
  let restart_handler = () => restartGame(buttons, gameStats);

  // Creates event listeners for each selection button
  buttons.forEach((element) => {
    element.addEventListener("click", choice_handler);
  });

  restartButton.addEventListener("click", restart_handler);

  return;
}

gameManager();
