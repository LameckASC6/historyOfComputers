let timeLine = document.getElementById('timeLine');
let game = document.getElementById('game');

function timeLineButton(event){
    event.preventDefault();
    window.location.href = "historyOfComputer.html";
}

function gameButton(event){
    event.preventDefault();
    window.location.href = "computerGame.html";
}

timeLine.addEventListener('click', timeLineButton);
game.addEventListener('click', gameButton);