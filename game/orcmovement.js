let orcCanvas = document.querySelector(".orc");
let Move_ORC_BTN = document.getElementById("move-orc-btn");
let orcPath = document.querySelector(".orc-path canvas");
let isAtEnd = false;
let towerCanvas = document.querySelector(".tower");
let moveInterval; // Declare moveInterval in the global scope
let currentLeft = parseFloat(orcCanvas.style.left); // Use parseFloat to handle "vw" units
let currentPath = parseFloat(orcPath.style.left);

document.addEventListener("DOMContentLoaded", function () {
  // Start with inactive images for orc and tower
  orcCanvas.style.backgroundImage =
    'url("../game/game images/Orcs/Orc 1 - Unact.png")';
  towerCanvas.style.backgroundImage = 'url("game images/Castle unactive.png")';
});

let currentIndexOrc = 0;

function changeImageOrc() {
  if (currentIndexOrc === 0) {
    orcCanvas.style.backgroundImage = `url("../game/game images/Orcs/Orc 1 - Act.png")`;
    currentIndexOrc = 1;
  } else {
    orcCanvas.style.backgroundImage = `url("../game/game images/Orcs/Orc 1 - Unact.png")`;
    currentIndexOrc = 0;
  }

  orcCanvas.classList.add("smooth-transition");
}

function moveOrc() {
  // Adjust the left value, for example, decrease it by 0.5vw
  currentLeft = currentLeft - 0.5;

  // Check if the orc has reached a certain point (e.g., when currentLeft <= currentPath)
  if (currentLeft <= currentPath) {
    clearInterval(moveInterval);
    isAtEnd = true;
  }

  orcCanvas.style.left = `${currentLeft}vw`; // Apply the updated left value to the style
}

Move_ORC_BTN.addEventListener("click", function () {
  // Reset variables
  isAtEnd = false;
  currentLeft = parseFloat(orcCanvas.style.left);

  // Set the interval to move the orc every 500 milliseconds
  moveInterval = setInterval(function () {
    changeImageOrc();
    moveOrc();
    console.log("move");
    if (isAtEnd) {
      clearInterval(moveInterval);
      // Change the image or do other actions when the orc reaches the end
    }
  }, 500);
});
