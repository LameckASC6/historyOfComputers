let firstCircle = document.getElementById("firstCircle");
let secondCircle = document.getElementById("secondCircle"); 
let thirdCircle = document.getElementById("thirdCircle"); 
let fourthCircle = document.getElementById("fourthCircle"); 
let fifthCircle = document.getElementById("fifthCircle"); 
let sixthCircle = document.getElementById("sixthCircle"); 

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById("sixth");

function visible(item){
    first.style.visibility = "hidden";
    second.style.visibility = "hidden";
    third.style.visibility = "hidden";
    fourth.style.visibility = "hidden";
    fifth.style.visibility = "hidden";
    sixth.style.visibility = "hidden";
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

function fourthCircleButton(){
    visible(fourth);
}

function fifthCircleButton(){
    visible(fifth);
}

function sixthCircleButton(){
    visible(sixth);
}

function firstPage(){
    window.location.href = "https://www.google.com";
}

function secondPage(){
    window.location.href = "https://www.google.com";
}

function thirdPage(){
    window.location.href = "https://www.google.com";
}

function fourthPage(){
    window.location.href = "https://www.google.com";
}

function fifthPage(){
    window.location.href = "https://www.google.com";
}

function sixthPage(){
    window.location.href = "https://www.google.com";
}

firstCircle.addEventListener('mouseover', firstCircleButton);
secondCircle.addEventListener('mouseover', secondCircleButton);
thirdCircle.addEventListener('mouseover', thirdCircleButton);
fourthCircle.addEventListener('mouseover', fourthCircleButton);
fifthCircle.addEventListener('mouseover', fifthCircleButton);
sixthCircle.addEventListener('mouseover', sixthCircleButton);

first.addEventListener('click', firstPage);
second.addEventListener('click', secondPage);
third.addEventListener('click', thirdPage);
fourth.addEventListener('click', fourthPage);
fifth.addEventListener('click', fifthPage);
sixth.addEventListener('click', sixthPage);