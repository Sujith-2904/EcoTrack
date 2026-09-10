// Get saved data from browser
let score = Number(localStorage.getItem("ecoScore")) || 0;

let completed = Number(localStorage.getItem("completedHabits")) || 0;


// Update display when page opens
updateScore();


function completeHabit(button, points) {

    // Prevent clicking the same habit twice
    if (button.disabled) {
        return;
    }

    // Add points
    score = score + points;

    // Increase completed count
    completed = completed + 1;


    // Save data in browser
    localStorage.setItem("ecoScore is", score);

    localStorage.setItem("completedHabits are", completed);


    // Change button
    button.innerHTML = "✓ Completed";

    button.disabled = true;


    // Update display
    updateScore();
}


function updateScore() {

    document.getElementById("totalScore").innerHTML =
        score + " points";

    document.getElementById("totalCompleted").innerHTML =
        completed + " habits completed";
}