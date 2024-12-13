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
  messageBoard.innerHTML =
    "<h3>You clever pal! Here's your riddle.</h3><p>What do Sony, Microsoft and Sega have in common?</p><p><i>This</i> is where you shall continue this adventure.</p><p>Psst...if you still don't get it, just <span class='spoiler'>open the console ya doofus</span>~</p>";
  youtubeVideo.style.display = "none";
  spoiler.classList.add("revealed");
  console.gif();
}

function decoyScissorsClick() {
  messageBoard.innerHTML = "<h3>You died from a thousand cuts. Try again.</h3>";
  youtubeVideo.style.display = "block";
  decrementTries();
}

// REAL GAME

console.gif("");
