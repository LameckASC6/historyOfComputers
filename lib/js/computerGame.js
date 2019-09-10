const player = document.getElementById("taxi");
const road = document.getElementById("road");
const enemies = document.getElementsByClassName("enemy");

const firstCar = document.getElementById("firstCar");
const secondCar = document.getElementById("secondCar");
const thirdCar = document.getElementById("thirdCar");

const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
const thirdText = document.getElementById("thirdText");

var playerHitTest = new HitTest( player );

function randomYear(){
    let firstDigit = Math.floor(Math.random()*10);
    let secondDigit = Math.floor(Math.random()*10);
    return ("19" + firstDigit + secondDigit);
}

function changeText(){
    firstText.innerText = randomYear();
    secondText.innerText = randomYear();
    thirdText.innerText = randomYear();
    setInterval(changeText, 10000);
}

changeText();

function collision() {
    for (const enemy of enemies) {
        if(playerHitTest.toObject(enemy)){
            if(playerHitTest.toObject(firstCar)){
                console.log('works');
            }
            if(playerHitTest.toObject(secondCar)){
                console.log('works');
            }
            if(playerHitTest.toObject(thirdCar)){
                console.log('works');
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