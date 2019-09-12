const player = document.getElementById("taxi");
const road = document.getElementById("road");
const enemies = document.getElementsByClassName("enemy");
const textBox = document.getElementById("textBox");

const firstCar = document.getElementById("firstCar");
const secondCar = document.getElementById("secondCar");
const thirdCar = document.getElementById("thirdCar");

const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
const thirdText = document.getElementById("thirdText");

let answer;
let randomNum = Math.ceil(Math.random() * 3);
let questions = [
    "The first ever computer engineered to combat the encryption made by the Nazis’s enigma machine.",
    "The Eniac contained vacuum tubes it was the first general-purpose computer it took the space of a big room and its task was to calculate artillery.",
    "The early modems were used by the US Air Force in the 1950s but the first commercial ones were made adecade later. The earliest modems were about 75 bps aka bits per second.",
    "The first-ever programming language using English instead of unintelligible numbers. It was suited for numeric computation and scientific calculation.",
    "The mouse first started using a trackball made by a team led by Rainer Mallebrein at Telefunken Konstanz.",
    "Robert H. Dennards invention greatly increased memory density at the cost of volatility and ram was born.",
    "The floppy disk they became commercially available in 1971 part of IBM products.",
    "Ethernet cable Ethernet data transfer rates have been increased from the original 2.94 MB’s to the latest 100 GBS per second.",
    "The Altair 8800 the first personal computer based on the intel8008 CPU, ran on the Altair basic 200khz to 800khz.",
    "The apple 2 ran on integer basic, 4 to 64kB ram Mos6502 CPU, 5069$ in today’s price.",
    "C++ designed by Bjarne Stroustrup based on C he added classes and a tiny bit of syntax change.",
    "On February 17th, 2000 Microsoft launched Windows 2000.",
    "Apple, the maker of iPods, iPhones, and iPads, overtook Microsoft, the computer software giant, on Wednesday 26th May 2010, to become the world's most valuable technology company.",
    "The first folding smartphones are introduced in February 2019 with Samsung introducing the Galaxy Fold and Huawei introducing the Mate X."
];

let questionAnswers = [
    1939,
    1946,
    1949,
    1957,
    1964,
    1968,
    1971,
    1973,
    1975,
    1977,
    1979,
    2000,
    2010,
    2019
];


function question() {
    let questionNumber = Math.floor(Math.random() * 14);
    textBox.innerText = questions[questionNumber];
    answer = questionAnswers[questionNumber];
}

question();

let playerHitTest = new HitTest(player);

function randomYear() {
    let firstDigit = Math.floor(Math.random() * 10);
    let secondDigit = Math.floor(Math.random() * 10);
    return ("19" + firstDigit + secondDigit);
}

function changeText() {
    let randomNum2 = Math.ceil(Math.random() * 3);
    if (randomNum2 == 1) {
        firstText.innerText = answer;
        secondText.innerText = randomYear();
        thirdText.innerText = randomYear();
    } else if (randomNum2 == 2) {
        firstText.innerText = randomYear();
        secondText.innerText = answer;
        thirdText.innerText = randomYear();
    } else {
        firstText.innerText = randomYear();
        secondText.innerText = randomYear();
        thirdText.innerText = answer;
    }

    randomNum = randomNum2;
    setInterval(changeText, 35000);
}

changeText();

function collision() {
    for (const enemy of enemies) {
        if (playerHitTest.toObject(enemy)) {
            if (playerHitTest.toObject(firstCar)) {
                if (randomNum == 1) {
                    question();
                } else {
                    alert('You Lose');
                }
            }
            if (playerHitTest.toObject(secondCar)) {
                if (randomNum == 2) {
                    question();
                } else {
                    alert('You Lose');
                }
            }
            if (playerHitTest.toObject(thirdCar)) {
                if (randomNum == 3) {
                    question();
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

    if (event.keyCode == 65 || event.keyCode == 37 && currentPlacement >= (currentRoadPlacement + 70)) {
        player.style.marginLeft = currentPlacement - 5 + "px";
    }
    if (event.keyCode == 68 || event.keyCode == 39 && currentPlacementRight <= (currentRoadPlacementRight - 70)) {
        player.style.marginLeft = currentPlacement + 5 + "px";
    }
}

document.addEventListener('keydown', playerMovement);