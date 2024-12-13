"use strict";

const decoyRock = document.querySelector(".rock-container");
const decoyPaper = document.querySelector(".paper-container");
const decoyScissors = document.querySelector(".scissors-container");
const messageBoard = document.querySelector(".message-container");

decoyRock.addEventListener("click", decoyRockClick);
decoyPaper.addEventListener("click", decoyPaperClick);
decoyScissors.addEventListener("click", decoyScissorsClick);

function decoyRockClick() {
  console.log("You clicked on the ROCK!");
}
function decoyPaperClick() {
  console.log("You clicked on the PAPER!");
}
function decoyScissorsClick() {
  console.log("You clicked on the SCISSORS!");
}
