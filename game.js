"use strict";

const decoyRock = document.querySelector(".rock-container");
const decoyPaper = document.querySelector(".paper-container");
const decoyScissors = document.querySelector(".scissors-container");
const messageBoard = document.querySelector(".message-container");

decoyRock.addEventListener("click", decoyRockClick);
decoyPaper.addEventListener("click", decoyPaperClick);
decoyScissors.addEventListener("click", decoyScissorsClick);

function decoyRockClick() {
  messageBoard.innerHTML = "<h3>You died crushed to the bones! Try again.</h3>";
}
function decoyPaperClick() {
  messageBoard.innerHTML =
    "<h3>You clever pal! Here's your riddle.</h3><p>What do Sony, Microsoft and Sega have in common?</p><p><i>This</i> is where you shall continue this adventure.</p>";
}
function decoyScissorsClick() {
  messageBoard.innerHTML = "<h3>You died from a thousand cuts. Try again.</h3>";
}
