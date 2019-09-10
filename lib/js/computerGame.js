const player = document.getElementById("taxi");
const road = document.getElementById("road");
const enemies = document.getElementsByClassName("enemy");

var playerHitTest = new HitTest( player );

function collision() {
    for (const enemy of enemies) {
        if(playerHitTest.toObject(enemy)){
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