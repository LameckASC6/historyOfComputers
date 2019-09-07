let firstCircle = document.getElementById("firstCircle");
let secondCircle = document.getElementById("secondCircle"); 
let thirdCircle = document.getElementById("thirdCircle"); 
let fourthCircle = document.getElementById("fourthCircle"); 
let fifthCircle = document.getElementById("fifthCircle"); 
let sixthCircle = document.getElementById("sixthCircle"); 
let seventhCircle = document.getElementById("seventhCircle"); 
let eighthCircle = document.getElementById("eighthCircle");
let ninthCircle = document.getElementById("ninthCircle"); 
let tenthCircle = document.getElementById("tenthCircle");
let eleventhCircle = document.getElementById("eleventhCircle");
let twelfthCircle = document.getElementById("twelfthCircle");
let thirteenthCircle = document.getElementById("thirteenthCircle");    

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById("sixth");
let seventh = document.getElementById("seventh");
let eighth = document.getElementById("eighth");
let ninth = document.getElementById("ninth");
let tenth = document.getElementById("tenth");
let eleventh = document.getElementById("eleventh");
let twelfth = document.getElementById("twelfth");
let thirteenth = document.getElementById("thirteenth");

function visible(item){
    first.style.visibility = "hidden";
    second.style.visibility = "hidden";
    third.style.visibility = "hidden";
    fourth.style.visibility = "hidden";
    fifth.style.visibility = "hidden";
    sixth.style.visibility = "hidden";
    seventh.style.visibility = "hidden";
    eighth.style.visibility = "hidden";
    ninth.style.visibility = "hidden";
    tenth.style.visibility = "hidden";
    eleventh.style.visibility = "hidden";
    twelfth.style.visibility = "hidden";
    thirteenth.style.visibility = "hidden";
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

function seventhCircleButton(){
    visible(seventh);
}

function eighthCircleButton(){
    visible(eighth);
}

function ninthCircleButton(){
    visible(ninth);
}

function tenthCircleButton(){
    visible(tenth);
}

function eleventhCircleButton(){
    visible(eleventh);
}

function twelfthCircleButton(){
    visible(twelfth);
}

function thirteenthCircleButton(){
    visible(thirteenth);
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

function seventhPage(){
    window.location.href = "https://www.google.com";
}

function eighthPage(){
    window.location.href = "https://www.google.com";
}

function ninthPage(){
    window.location.href = "https://www.google.com";
}

function tenthPage(){
    window.location.href = "https://www.google.com";
}

function eleventhPage(){
    window.location.href = "https://www.google.com";
}

function twelfthPage(){
    window.location.href = "https://www.google.com";
}

function thirteenthPage(){
    window.location.href = "https://www.google.com";
}

firstCircle.addEventListener('mouseover', firstCircleButton);
secondCircle.addEventListener('mouseover', secondCircleButton);
thirdCircle.addEventListener('mouseover', thirdCircleButton);
fourthCircle.addEventListener('mouseover', fourthCircleButton);
fifthCircle.addEventListener('mouseover', fifthCircleButton);
sixthCircle.addEventListener('mouseover', sixthCircleButton);
seventhCircle.addEventListener('mouseover', seventhCircleButton);
eighthCircle.addEventListener('mouseover', eighthCircleButton);
ninthCircle.addEventListener('mouseover', ninthCircleButton);
tenthCircle.addEventListener('mouseover', tenthCircleButton);
eleventhCircle.addEventListener('mouseover', eleventhCircleButton);
twelfthCircle.addEventListener('mouseover', twelfthCircleButton);
thirteenthCircle.addEventListener('mouseover', thirteenthCircleButton);

first.addEventListener('click', firstPage);
second.addEventListener('click', secondPage);
third.addEventListener('click', thirdPage);
fourth.addEventListener('click', fourthPage);
fifth.addEventListener('click', fifthPage);
sixth.addEventListener('click', sixthPage);
seventh.addEventListener('click', seventhPage);
eighth.addEventListener('click', eighthPage);
ninth.addEventListener('click', ninthPage);
tenth.addEventListener('click', tenthPage);
eleventh.addEventListener('click', eleventhPage);
twelfth.addEventListener('click', twelfthPage);
thirteenth.addEventListener('click', thirteenthPage);