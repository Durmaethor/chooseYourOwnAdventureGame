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

    alert("You wake up suddenly with a pounding head ache. You have no clue where you are, or what happened.");

    var choice1 = prompt("Do you OPEN your eyes? Or do you WAIT and listen?").toUpperCase();

        if(choice1 === "OPEN") {
            alert("You open your eyes and see a snarling orc looking monster staring at you. He screams in rage, lifts his axe and swings it down on you. The world goes dark... Game Over.");
        } 
        else if(choice1 === "WAIT") {
                alert("You decide to keep your eyes closed and listen to what surrounds you. You hear snarling and growling noises, as well as heavy footsteps very close. You decide it is better to play dead for a bit until whatever it is leaves.")
        } 
        else if(choice1 != "OPEN" || choice1 != "WAIT") {
                alert("You sit still and take a moment to choose... refresh the page and make a choice!");
        }






}, 3000);
