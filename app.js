let startButton = document.querySelector(".start-btn");
let mainMenu = document.querySelector(".start");
let gameScreen = document.querySelector(".gameScreen");
let chosen = document.querySelector(".chosen");
let gracz = document.querySelector(".graczChoice");
let comp = document.querySelector(".compChoice");

function startGame() {
  mainMenu.style.display = "none";
  gameScreen.style.display = "block";
}

startButton.addEventListener("click", startGame);

let playerChoice;
let pRock = document.querySelector(".rock");
let pPaper = document.querySelector(".paper");
let pScissors = document.querySelector(".scissors");

function rock() {
  playerChoice = "rock";
  gameScreen.style.display = "none";
  chosen.style.display = "block";
  gracz.src = "pics/rock.png";
}

pRock.addEventListener("click", rock);

function paper() {
  playerChoice = "paper";
  gameScreen.style.display = "none";
  chosen.style.display = "block";
  gracz.src = "pics/paper.png";
}

pPaper.addEventListener("click", paper);

function scissors() {
  playerChoice = "scissors";
  gameScreen.style.display = "none";
  chosen.style.display = "block";
  gracz.src = "pics/scissors.png";
}

pScissors.addEventListener("click", scissors);

let compChoice = Math.floor(Math.random() * 3) + 1;

if (compChoice === 1) {
  comp.src = "pics/rock.png";
} else if (compChoice === 2) {
  comp.src = "pics/paper.png";
} else if (compChoice === 3) {
  comp.src = "pics/scissors.png";
}

let win = document.querySelector(".win");
let draw = document.querySelector(".draw");
let lose = document.querySelector(".lose");

function wynik() {
  if (playerChoice === "rock") {
    if (compChoice === 1) {
      draw.style.display = "block";
    } else if (compChoice === 2) {
      lose.style.display = "block";
    } else {
      win.style.display = "block";
    }
  } else if (playerChoice === "paper") {
    if (compChoice === 1) {
      win.style.display = "block";
    } else if (compChoice === 2) {
      draw.style.display = "block";
    } else {
      lose.style.display = "block";
    }
  } else if (playerChoice === "scissors") {
    if (compChoice === 1) {
      lose.style.display = "block";
    } else if (compChoice === 2) {
      win.style.display = "block";
    } else {
      draw.style.display = "block";
    }
  }
}
pRock.addEventListener("click", wynik);
pPaper.addEventListener("click", wynik);
pScissors.addEventListener("click", wynik);
