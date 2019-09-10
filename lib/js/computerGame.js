const player = document.getElementById("taxi");
const road = document.getElementById("road");
const enemies = document.getElementsByClassName("enemy");

const firstCar = document.getElementById("firstCar");
const secondCar = document.getElementById("secondCar");
const thirdCar = document.getElementById("thirdCar");

const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
const thirdText = document.getElementById("thirdText");

let randomNum = Math.ceil(Math.random() * 3);

var playerHitTest = new HitTest(player);

function randomYear() {
    let firstDigit = Math.floor(Math.random() * 10);
    let secondDigit = Math.floor(Math.random() * 10);
    return ("19" + firstDigit + secondDigit);
}

function changeText() {
    if (randomNum == 1) {
        firstText.innerText = "1800";
        secondText.innerText = randomYear();
        thirdText.innerText = randomYear();
    } else if (randomNum == 2) {
        firstText.innerText = randomYear();
        secondText.innerText = "1800";
        thirdText.innerText = randomYear();
    } else {
        firstText.innerText = randomYear();
        secondText.innerText = randomYear();
        thirdText.innerText = "1800";
    }

    setInterval(changeText, 10000);
}

changeText();

function collision() {
    for (const enemy of enemies) {
        if (playerHitTest.toObject(enemy)) {
            if (playerHitTest.toObject(firstCar)) {
                if (randomNum == 1) {
                    firstCar.classList.toggle("fade");
                } else {
                    alert('You Lose');
                }
            }
            if (playerHitTest.toObject(secondCar)) {
                if (randomNum == 2) {
                    secondCar.classList.toggle("fade");
                } else {
                    alert('You Lose');
                }
            }
            if (playerHitTest.toObject(thirdCar)) {
                if (randomNum == 3) {
                    thirdCar.classList.toggle("fade");
                } else {
                    alert('You Lose');
                }
            }
        }
    }
    setInterval(collision, 1000);
}

collision();

function playerMovement() {
    let currentPlacement = player.getBoundingClientRect().left;
    let currentRoadPlacement = road.getBoundingClientRect().left
    currentPlacement = parseInt(currentPlacement);
    currentRoadPlacement = parseInt(currentRoadPlacement);

    let currentPlacementRight = player.getBoundingClientRect().right;
    let currentRoadPlacementRight = road.getBoundingClientRect().right;
    currentPlacementRight = parseInt(currentPlacementRight);
    currentRoadPlacementRight = parseInt(currentRoadPlacementRight);

    if (event.keyCode == 65 || event.keyCode == 37 && currentPlacement >= currentRoadPlacement) {
        player.style.marginLeft = currentPlacement - 5 + "px";
    }
    if (event.keyCode == 68 || event.keyCode == 39 && currentPlacementRight <= currentRoadPlacementRight) {
        player.style.marginLeft = currentPlacement + 5 + "px";
    }
}

document.addEventListener('keydown', playerMovement);