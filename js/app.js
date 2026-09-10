let tips = [
    "Turn off lights when you leave a room.",
    "Use a reusable water bottle instead of plastic bottles.",
    "Walk or cycle when travelling short distances.",
    "Switch off electronic devices when you are not using them.",
    "Use reusable bags while shopping."
];


function newTip() {

    let randomNumber =
        Math.floor(Math.random() * tips.length);

    document.getElementById("ecoTip").innerHTML =
        tips[randomNumber];
}


// Get saved score
let savedScore =
    Number(localStorage.getItem("ecoScore")) || 0;


// Get saved completed habits
let savedCompleted =
    Number(localStorage.getItem("completedHabits")) || 0;


// Display saved values
document.getElementById("score").innerHTML =
    savedScore;

document.getElementById("completed").innerHTML =
    savedCompleted;
function resetProgress() {
    localStorage.setItem("ecoScore", 0);
    localStorage.setItem("completedHabits", 0);

    document.getElementById("score").innerHTML = 0;
    document.getElementById("completed").innerHTML = 0;

    alert("Eco progress has been reset!");
}