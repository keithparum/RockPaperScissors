"use strict";

// DECOY GAME
const decoyRock = document.querySelector(".rock-container");
const decoyPaper = document.querySelector(".paper-container");
const decoyScissors = document.querySelector(".scissors-container");
const messageBoard = document.querySelector(".message-container");
const youtubeVideo = document.querySelector(".video-container");
const spoiler = document.querySelector(".spoiler");
const tries = document.querySelector(".tries");
let countDown = 3;

// Update tries display initially
tries.innerHTML = `tries left: ${countDown}`;

function decrementTries() {
  countDown--;
  tries.innerHTML = `Tries left: ${countDown}`;

  if (countDown <= 0) {
    messageBoard.innerHTML =
      "<h3>You're out of tries! Refresh the page to try again.</h3>";
    decoyRock.removeEventListener("click", decoyRockClick);
    decoyPaper.removeEventListener("click", decoyPaperClick);
    decoyScissors.removeEventListener("click", decoyScissorsClick);
  }
}

// Event Listeners
decoyRock.addEventListener("click", decoyRockClick);
decoyPaper.addEventListener("click", decoyPaperClick);
decoyScissors.addEventListener("click", decoyScissorsClick);

function decoyRockClick() {
  messageBoard.innerHTML = "<h3>You died crushed to the bones! Try again.</h3>";
  youtubeVideo.style.display = "block";
  decrementTries();
}

function decoyPaperClick() {
  youtubeVideo.innerHTML =
    '<iframe src="https://giphy.com/embed/l0K4bRk3PeJhiyb6M" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lionsgatehomeent-games-saw-jigsaw-l0K4bRk3PeJhiyb6M">via GIPHY</a></p>';
  youtubeVideo.style.display = "block";
  messageBoard.innerHTML =
    "<h3>You clever pal! Here's your riddle.</h3><p>What do Sony, Microsoft and Sega have in common?</p><p><i>This</i> is where you shall continue this adventure.</p><p>Psst...if you still don't get it, just <span class='spoiler'>open the console ya doofus</span>~</p>";

  spoiler.classList.add("revealed");
}

function decoyScissorsClick() {
  messageBoard.innerHTML = "<h3>You died from a thousand cuts. Try again.</h3>";
  youtubeVideo.style.display = "block";
  decrementTries();
}

// REAL GAME
const randomNum = () => Math.floor(Math.random() * 3) + 1;

// Detecting that the console has been open
Object.defineProperty(window, "detectConsole", {
  get: function () {
    console.log("Developer tools detected!");
    console.log("Type startGame() in the console to begin the game.");
    return "Console is open!";
  },
});

console.log(detectConsole);

console.log("Let the real games begin!");
let player1 = "";
let ptsP1 = 0;
let ptsJS = 0;
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// Attach startGame to the window object
window.startGame = function () {
  player1 = window.prompt("Enter your name:");
  if (!player1) {
    console.log("You must enter your name to start the game!");
    return;
  }
  console.log(
    `Welcome, ${player1}! Let the game between you and Jigsaw begin!\nThis is a game of Rock Paper Scissors.\nFirst one to 3 points wins!`
  );

  // Start game loop
  while (ptsP1 < 3 && ptsJS < 3) {
    const userChoice = window
      .prompt("Pick rock, paper, or scissors.")
      ?.toLowerCase();

    // Validate input
    if (![rock, paper, scissors].includes(userChoice)) {
      console.log("Invalid choice! Please pick rock, paper, or scissors.");
      continue;
    }

    // Generate Jigsaw's choice
    const jigsawChoice =
      randomNum() === 1 ? rock : randomNum() === 2 ? paper : scissors;
    console.log(`Jigsaw picked ${jigsawChoice}.`);

    // Determine the winner
    const roundResult =
      userChoice === jigsawChoice
        ? "tie"
        : (userChoice === rock && jigsawChoice === scissors) ||
          (userChoice === paper && jigsawChoice === rock) ||
          (userChoice === scissors && jigsawChoice === paper)
        ? "win"
        : "lose";

    switch (roundResult) {
      case "win":
        console.log(`You win this round! ${userChoice} beats ${jigsawChoice}.`);
        ptsP1++;
        break;
      case "lose":
        console.log(
          `Jigsaw wins this round! ${jigsawChoice} beats ${userChoice}.`
        );
        ptsJS++;
        break;
      case "tie":
        console.log("It's a tie! You both picked the same.");
        break;
    }

    console.log(`Score: ${player1}: ${ptsP1}, Jigsaw: ${ptsJS}`);
  }

  // Announce final result
  console.log(
    ptsP1 === 3
      ? `Congratulations, ${player1}! You beat Jigsaw with a score of ${ptsP1} to ${ptsJS}! You ESCAPED all his traps and you're lucky!`
      : `Game over! Jigsaw wins with a score of ${ptsJS} to ${ptsP1}. Better luck next time, ${player1}.`
  );
};
