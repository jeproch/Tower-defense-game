let orcCanvas = document.querySelector('.orc'); // If you want to use the class
let Move_ORC_BTN = document.getElementById("move-orc-btn")
let orcPath = document.querySelector('.orc-path canvas')
let isAtEnd = false;
let towerCanvas = document.querySelector('.tower')

document.addEventListener('DOMContentLoaded', function() {
    // Start with unactive images for orc and tower
    orcCanvas.style.backgroundImage = 'url("../game/game images/Orcs/Orc 1 - Unact.png")';
    towerCanvas.style.backgroundImage = 'url("game images/Castle unactive.png")';
})

orcCanvas.style.left = '85vw'
orcPath.style.left = '20vw'

let currentIndexOrc = 0;
let currentIndexTower = 0;

function changeImageOrc() {
    currentIndexOrc = 1 - currentIndexOrc; // Toggle between 0 and 1

    if (currentIndexOrc === 0) {
        orcCanvas.style.backgroundImage =  `url("../game/game images/Orcs/Orc 1 - Act.png")`;
    } else {
        orcCanvas.style.backgroundImage = `url("../game/game images/Orcs/Orc 1 - Unact.png")`;
    }

    orcCanvas.classList.add('smooth-transition');
}

function changeImageTower() {
    currentIndexTower = 1 - currentIndexTower; // Toggle between 0 and 1

    if (currentIndexTower === 0) {
        towerCanvas.style.backgroundImage = `url("game images/Castle unactive.png")`;
    } else {
        towerCanvas.style.backgroundImage = `url("game images/Castle active.png")`;
    }

    towerCanvas.classList.add('smooth-transition');
}

let moveInterval;

let moveOrc = function() {
    let currentLeft = parseInt(orcCanvas.style.left);
    let CurrentPath = parseInt(orcPath.style.left)

    // Adjust the left value, for example, increase it by 10vw
    currentLeft -= 0.05;

    // Set the updated left value
    orcCanvas.style.left = currentLeft + 'vw';

    if (currentLeft <= CurrentPath) {
        clearInterval(moveInterval);

        isAtEnd = true;
    }
}

Move_ORC_BTN.addEventListener('click', function() {
    changeImageOrc();
    moveOrc();
    changeImageTower();

    moveInterval = setInterval(function() {
        moveOrc();
        dps();
        if (parseInt(orcCanvas.style.left) <= parseInt(orcPath.style.left)) {
            changeImageTower();
        }
    }, 500);
})

window.isAtEnd = isAtEnd;