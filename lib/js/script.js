let submit = document.getElementById('submit_button');

function submitButton(event){
    event.preventDefault();
    window.location.href = "../../historyOfComputer.html";
}

submit.addEventListener('click', submitButton);