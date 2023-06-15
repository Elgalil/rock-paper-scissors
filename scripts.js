const outPut = document.querySelector(".textOutput");
const rock = document.querySelector(".rock img");
const paper = document.querySelector(".paper img");
const scissors = document.querySelector(".scissors img");
const player = document.querySelector(".playerCount");
const computer = document.querySelector(".computerCount");
const winner = document.querySelector(".winner");

let playerCount = 0;
let computerCount = 0;

const updateScore = () => {
  player.textContent = playerCount;
  computer.textContent = computerCount;
};

const announceWinner = () => {
  if (playerCount === 5) {
    winner.textContent =
      "You have won 5 rounds congrats! Click again to start a new game";
    playerCount = 0;
    computerCount = 0;
  }

  if (computerCount === 5) {
    winner.textContent =
      "You have lost 5 rounds, too bad. Click again to start a new game";
    playerCount = 0;
    computerCount = 0;
  }
};

rock.addEventListener("click", (event) => {
  singleRound("rock", computerSelection);
  announceWinner();
  console.log(playerCount, computerCount);
});
paper.addEventListener("click", (event) => {
  singleRound("paper", computerSelection);
  announceWinner();
});
scissors.addEventListener("click", (event) => {
  singleRound("scissors", computerSelection);
  announceWinner();
});

const getComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

let computerSelection;

const singleRound = (playerChoice, computerSelection) => {
  let playerSelection = playerChoice.toLowerCase();
  computerSelection = getComputerChoice();
  winner.textContent = "";

  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
    outPut.textContent = "Tie Game";
    console.log("tie game");
    return "Tie game";
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    outPut.textContent = "You won";
    console.log("You won");
    ++playerCount;
    updateScore();
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lost");
    outPut.textContent = "You lost";
    ++computerCount;
    updateScore();
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lost");
    outPut.textContent = "You lost";
    ++computerCount;
    updateScore();
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You won");
    outPut.textContent = "You won";
    ++playerCount;
    updateScore();
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You won");
    outPut.textContent = "You won";
    ++playerCount;
    updateScore();
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lost");
    outPut.textContent = "You lost";
    ++computerCount;
    updateScore();
  }
};
