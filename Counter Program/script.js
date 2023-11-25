// Initialize count global scope variable
let count = 0;

// Decrease button click event handler
document.getElementById("decreaseButton").onclick = function () {
  // Decrease count by 1
  count -= 1;

  // Update the HTML content of the countLabel element with the new count
  document.getElementById("countLabel").innerHTML = count;
};

// Increase button click event handler
document.getElementById("increaseButton").onclick = function () {
  // Increase count by 1
  count += 1;

  // Update the HTML content of the countLabel element with the new count
  document.getElementById("countLabel").innerHTML = count;
};

// Reset button click event handler
document.getElementById("resetButton").onclick = function () {
  // Reset count to 0
  count = 0;

  // Update the HTML content of the countLabel element with the reset count
  document.getElementById("countLabel").innerHTML = count;
};
