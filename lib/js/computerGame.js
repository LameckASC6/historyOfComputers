const player = document.getElementById("taxi");
const enemies = document.getElementsByClassName("enemy");

const playerWidth = parseInt(window.getComputedStyle(player, null).getPropertyValue('width'));
const playerHeight = parseInt(window.getComputedStyle(player, null).getPropertyValue('height'));

let enemyWidth;
let enemyHeight;

let playerPosition = player.getBoundingClientRect();
let playerX = parseInt(playerPosition.top);
let playerY = parseInt(playerPosition.left); 


let enemyPosition;
let enemyX;

let enemyY;

let number = 1;

function collision() {
    for (const enemy of enemies) {
        enemyPosition = enemy.getBoundingClientRect();
        enemyX = parseInt(enemyPosition.top);

        enemyY = parseInt(enemyPosition.left); 

        enemyWidth = window.getComputedStyle(enemy, null).getPropertyValue('width');
        enemyHeight = window.getComputedStyle(enemy, null).getPropertyValue('height');

        if (playerX >= enemyX && playerX + playerWidth <= (enemyX + enemyWidth) && playerY >= enemyY && playerY + playerHeight <= (enemyY + enemyHeight)) {
            console.log('alert')
        }
    }
    window.setInterval(collision, 1);
}

collision();


function playerMovement() {
    let currentPlacement = window.getComputedStyle(player, null).getPropertyValue("margin-left");
    currentPlacement = parseInt(currentPlacement);

    if (event.keyCode == 65 || event.keyCode == 37 && currentPlacement >= 64) {
        player.style.marginLeft = currentPlacement - 32 + "px";
    }
    if (event.keyCode == 68 || event.keyCode == 39 && currentPlacement <= 658) {
        player.style.marginLeft = currentPlacement + 32 + "px";
    }
}

document.addEventListener('keydown', playerMovement);