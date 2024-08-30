let inp = document.getElementById("inp");
let submit = document.getElementById("submit1");
let sub = document.getElementById("submit2");
let res = document.getElementById("result");
let arr = [];
let rand;
let upto = document.getElementById("to");

// Add a button to play again
let playAgain = document.createElement("button");
playAgain.textContent = "Play Again";
playAgain.addEventListener("click", () => {
location.reload();
});
playAgain.style.display = "none"; // Initially hide the play again button

submit.addEventListener("click", (e) => {
e.preventDefault();
let up = parseInt(upto.value);
if (isNaN(up)) {
res.innerHTML = "Please enter a number";
} else if (up < 0) {
res.innerHTML = "Please enter a positive number in the input field";
} else if (up > 0) {
rand = Math.round(Math.random() * up);
res.innerHTML = `Guess a number between 1 and ${up}`;
}
});

sub.addEventListener("click", (e) => {
if (inp.value != "" && upto.value != "") {
let guess = parseInt(inp.value);
arr.push(guess);
let total = 100;
let guess_time = total - arr.length;
if (guess > rand) {
res.innerHTML = "Value is high";
} else if (guess < rand) {
res.innerHTML = "Value is low";
} else {
res.innerHTML = `You guessed the number in ${arr.length} attempts`;
arr = []; // Reset the array for a new game
res.appendChild(playAgain);
playAgain.style.display = "block"; // Show the play again button
}
inp.value = "";
} else {
res.innerHTML = "Please enter values in both input fields";
}
});

function snake_water_gun() {
location.href = "";
}
function to_do(){
location.href = "https://to-do-list-harsh.tiiny.site/";
}

// Add an event listener to the input field to check for invalid input
inp.addEventListener("input", (e) => {
let value = parseInt(inp.value);
if (isNaN(value)) {
res.innerHTML = "Please enter a valid number";
}
});