let firstCircle = document.getElementById("firstCircle");
let secondCircle = document.getElementById("secondCircle"); 
let thirdCircle = document.getElementById("thirdCircle"); 

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

function visible(item){
    first.style.visibility = "hidden";
    second.style.visibility = "hidden";
    third.style.visibility = "hidden";
    item.style.visibility = "visible";
}

function firstCircleButton(){
    visible(first);
}

function secondCircleButton(){
    visible(second);
}

function thirdCircleButton(){
    visible(third);
}

firstCircle.addEventListener('mouseover', firstCircleButton);
secondCircle.addEventListener('mouseover', secondCircleButton);
thirdCircle.addEventListener('mouseover', thirdCircleButton);