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

// This is for pan card section

let panform = document.getElementById('panForm');
let pannumber = document.getElementById('pan');
let btn = document.getElementById('btn');
let span = document.getElementById('spa');


panform.addEventListener('submit', function(e){
    // e.preventDefault();
    let panInput = pannumber.value;
    let regPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if(regPattern.test(panInput)){
        span.textContent = 'Valid Pan Number';
        span.style.color = 'green'
    }else{
        e.preventDefault();
        span.textContent = 'Invalid Pan Number';
        span.style.color = 'red';
    }
})
