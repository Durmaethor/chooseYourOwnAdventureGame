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

    var choice1 = prompt("Do you open your eyes? Or do you wait and listen?");

        if(choice1 === "open") {
            alert("You open your eyes and see a snarling orc looking monster staring at you. He screams in rage, lifts his axe and swings it down on you. The world goes dark... Game Over.");
        } 
        else if(choice1 === "wait") {
                alert("You decide to keep your eyes closed and listen to what surrounds you. You hear snarling and growling noises, as well as heavy footsteps very close. You decide it is better to play dead for a bit until whatever it is leaves.")
        } 
        else if(choice1 != "open" && choice1 != "wait") {
                alert("You sit still and take a moment to choose...");
                var choice1 = prompt("Do you open your eyes? Or do you wait and listen?");
        }

        alert(choice1);





}, 3000);
