// Declare variables x, y, and z to store random numbers
let x;
let y;
let z;

// Assign an onclick event handler to the button with id "clickMeBtn"
document.getElementById("clickMeBtn").onclick = function () {
  // Generate a random number between 1 and 6 (inclusive) and assign it to variable x
  x = Math.floor(Math.random() * 6) + 1;

  // Generate a random number between 1 and 10 (inclusive) and assign it to variable y
  y = Math.floor(Math.random() * 10) + 1;

  // Generate a random number between 1 and 20 (inclusive) and assign it to variable z
  z = Math.floor(Math.random() * 20) + 1;

  // Update the content of HTML elements with ids "xDice", "yDice", and "zDice" with the generated random values
  document.getElementById("xDice").innerHTML = "You Rolled: " + x;
  document.getElementById("yDice").innerHTML = "You Rolled: " + y;
  document.getElementById("zDice").innerHTML = "You Rolled: " + z;
};
