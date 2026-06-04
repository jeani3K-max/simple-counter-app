// Variable
let count = 0;

// Get the counter element
const counter = document.getElementById("count");

// Increase
function increaseCount() {
    count++;
    counter.textContent = count;
}

// Decrease
function decreaseCount() {
    count--;
    counter.textContent = count;
}

// Reset
function resetCount() {
    count = 0;
    counter.textContent = count;
}