let user = document.getElementById('username');
let butto = document.getElementById('btn');
let span = document.getElementById('spa');

function validation() {
    let userDetails = user.value;
    if (userDetails.length === 0){
        span.innerHTML = "Enter user name";
        span.style.color = "red";
        butto.disabled = true;
        return false;
    }

    if(!userDetails.match(/^[a-zA-Z]{3,}$/)){
        span.textContent = "Enter name more than 3 characters";
        span.style.color = "blue"
        butto.disabled = true;
        return false;
    }

    span.innerHTML ="Valid Name....";
    butto.disabled = false;
    return true;

}
user.addEventListener('keyup',validation);
