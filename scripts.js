const getComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

let computerSelection;

const singleRound = (playerChoice, computerSelection) => {
  let playerSelection = playerChoice.toLowerCase();
  computerSelection = getComputerChoice();

  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
    console.log("Tie game");
    return "Tie game";
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You won");
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lost");
    return "You lost";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lost");
    return "You lost";
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You won");
    return "You won";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You won");
    return "You won";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lost");
    return "You lost";
  }
};
