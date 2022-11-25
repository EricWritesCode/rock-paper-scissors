// Randomly chooses a move for the computer
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}


//Plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  let playerMove = playerSelection.toLowerCase();
  // Including this in case computer choice is eventually exposed, easier than converting to caps afterwards
  // let computerMove = computerSelection.toLowerCase();

  if (playerMove === 'rock') {
    switch (computerSelection) {
      case 'rock':
        return 'Tie!';
      case 'paper':
        return 'Computer wins! Paper beats rock.';
      case 'scissors':
        return 'You win! Rock beats scissors.';
    }
  } else if (playerMove === 'paper') {
    switch (computerSelection) {
      case 'rock':
        return 'You win! Paper beats rock.';
      case 'paper':
        return 'Tie!';
      case 'scissors':
        return 'Computer wins! Scissors beats paper.';
    }
  } else if (playerMove === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        return 'Computer wins! Rock beats scissors.';
      case 'paper':
        return 'You win! Scissors beats paper.';
      case 'scissors':
        return 'Tie!';
    }
  } else {
    return 'Invalid move!';
  }

}

function testRound(playerSelection) {
  const computerSelection = getComputerChoice();
  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);
  console.log(playRound(playerSelection, computerSelection));
}

// Test Code
// testRound('Rock');
// testRound('Paper');
// testRound('Scissors');
// testRound('rock');
// testRound('paper');
// testRound('scissors');
// testRound('banana');
// testRound('rockscissors');
// testRound('scissorspaper');