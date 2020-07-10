// declare vars
const green = document.querySelector(".top-left-quadrant");
const red = document.querySelector(".top-right-quadrant");
const yellow = document.querySelector(".bottom-left-quadrant");
const blue = document.querySelector(".bottom-right-quadrant");

const quadrant = document.querySelectorAll(".quadrant");
const startButton = document.querySelector(".start");

const allQuad = [green, red, yellow, blue];

let sequence = [];
let intervalSequence;
let currentSequence = 0;
let roundCount = 0;
let userChoice = [];

// start button
startButton.addEventListener("click", (e) => {
  playGame();
  console.log(e);
});

function compareInputChoice(e) {
  let quadChoice = parseInt(e.target.dataset.index);
  userChoice.push(quadChoice);
  let lastElement = userChoice.length - 1;

  if (
    sequence[lastElement] == userChoice[lastElement] &&
    userChoice.length < sequence.length
  ) {
    console.log("great! guess the next button");
  } else if (
    sequence[lastElement] == userChoice[lastElement] &&
    userChoice.length == sequence.length
  ) {
    showSequence();
  } else {
    alert("game over!");
  }
}

for (let i = 0; i < quadrant.length; i++) {
  quadrant[i].addEventListener("click", compareInputChoice);
}

// add flash
function addHighlight(button) {
  button.classList.add("flash");
}

// remove flash
function removeHighlight(button) {
  button.classList.remove("flash");
}

// create flash function
function flashQuad(button) {
  addHighlight(button);
  setTimeout(removeHighlight, 700, button);
}

// produce random number for sequence
function randNumber() {
  sequence.push(Math.floor(Math.random() * 4));
}

// iterate through each sequence round
function iterateSequence() {
  flashQuad(allQuad[sequence[currentSequence]]);
  if (currentSequence == sequence.length - 1) {
    clearInterval(intervalSequence);
  } else {
    currentSequence++;
  }
}

// show player pattern sequence to player
function showSequence() {
  randNumber();
  userChoice = [];
  currentSequence = 0;
  intervalSequence = setInterval(iterateSequence, 1000);
}

// add the play function which will initialize the game and the first sequence
function playGame() {
  showSequence();
}
