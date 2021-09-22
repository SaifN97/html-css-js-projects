"use strict";
let message = document.querySelector(".message");
let checkbtn = document.querySelector(".check");
let guess = document.querySelector(".guess");
let number = document.querySelector(".number");
let scoreEl = document.querySelector(".score");
let body = document.querySelector("body");
let playAgain = document.querySelector(".again");

//Variables
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Event Listeners

checkbtn.addEventListener("click", () => {
  let playerGuess = Number(guess.value);
  //Empty input
  if (!playerGuess) {
    message.textContent = "⛔ No number";
    //Game win
  } else if (playerGuess === secretNum) {
    message.textContent = " 🥳 Correct Number!";
    number.textContent = secretNum;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    //Setting new highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //Wrong guess
  } else if (playerGuess !== secretNum) {
    if (score > 1) {
      playerGuess > secretNum
        ? (message.textContent = "📈 Too High")
        : (message.textContent = "📉 Too Low");
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "✨ You Lost!";
      scoreEl.textContent = 0;
    }
  }
});

//New Game
playAgain.addEventListener("click", () => {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  guess.value = "";
  score = 20;
  scoreEl.textContent = score;
  message.textContent = "Start guessing...";
  number.textContent = "?";
  number.style.width = "15rem";
  body.style.backgroundColor = "#222";
});
