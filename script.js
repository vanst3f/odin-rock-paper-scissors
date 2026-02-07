const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const rounds = [
  "--- ROUND ONE ---",
  "--- ROUND TWO ---",
  "--- ROUND THREE ---",
  "--- ROUND FOUR ---",
  "--- ROUND FIVE ---",
];

function getHumanChoice() {
  let input = prompt(
    "Please enter rock, paper or scissors. \n(Enter nothing to quit)"
  ).toLowerCase();

  while (input) {
    if (choices.includes(input)) {
      console.log(`you chose ${input}`);
      return input;
    }
    input = prompt(
      "Invalid input. Please enter rock, paper or scissors. \n(Enter nothing to quit)"
    ).toLowerCase();
  }
  return null; // user quits
}

function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  const counter = choices[random];
  console.log(`opponent chose ${counter}`);
  return counter;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`you both chose ${computerChoice}, it"s a draw!`);
    console.log(
      `your score: ${humanScore} \nopponent's score: ${computerScore}`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`${humanChoice} beats ${computerChoice}, you won!`);
    console.log(
      `your score: ${humanScore} \nopponent's score: ${computerScore}`
    );
  } else {
    computerScore++;
    console.log(`${computerChoice} beats ${humanChoice}, you lost!`);
    console.log(
      `your score: ${humanScore} \nopponent's score: ${computerScore}`
    );
  }
}

function playGame() {
  for (i = 0; i < rounds.length; i++) {
    console.log(rounds[i]);
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log("--- GAME OVER ---");
}

playGame();
