let submit = document.getElementById('submit_button');

function submitButton(event){
    event.preventDefault();
    window.location.href = "computerHistory.html";
}

submit.addEventListener('click', submitButton);