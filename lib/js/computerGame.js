const player = document.getElementById("taxi"); 
const enemies = document.getElementsByClassName("enemy");

let playerPosition = player.getBoundingClientRect();
let playerX = playerPosition.left;
let playerXE = playerPosition.right;
let playerY = playerPosition.top;
let playerYE = playerPosition.bottom;

let enemyPosition;
let enemyX;
let enemyXE;
let enemyY;
let enemyYE;

let number = 1;


document.addEventListener('mousemove', function(event){ 
    for(const enemy of enemies){
        console.log(enemy);
        enemyPosition = enemy.getBoundingClientRect();
        enemyX = enemyPosition.left;
        enemyXE = enemyPosition.right;
        enemyY = enemyPosition.top;
        enemyYE = enemyPosition.bottom;

        console.log(`Enemy Number ${number}: ( X : ${enemyX}; XE : ${enemyXE}; Y : ${enemyY}; YE : ${enemyYE} ) `)
        number++;
        if(enemyYE == playerY){
            alert('works');
        }
    }
    
});

function playerMovement(){
    let currentPlacement = window.getComputedStyle(player, null).getPropertyValue("margin-left");
    currentPlacement = parseInt(currentPlacement);
    
    if (event.keyCode == 65 || event.keyCode == 37 && currentPlacement >= 64){
        player.style.marginLeft = currentPlacement - 32 + "px";
    }
    if (event.keyCode == 68 || event.keyCode == 39 && currentPlacement <= 658){
        player.style.marginLeft = currentPlacement + 32 + "px";
    }
}

document.addEventListener('keydown', playerMovement)