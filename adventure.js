// Simple choose your own adventure game using JavaScript

// Check to see if the user is ready
setTimeout(function() {
    window.confirm("Shall we begin?");
}, 1000);

// Ask the player their age
setTimeout(function() {

    var age = prompt("How many years do you possess?");
    if(age < 13) {
        alert("You shall not pass!");
    } else {
        alert("You may proceed, but proceed at your own risk.");
    }

    



}, 3000);
