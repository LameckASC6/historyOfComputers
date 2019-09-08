const player = document.getElementById("taxi"); 

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