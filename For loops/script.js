// for loop: repeat some code a LIMITED number of times

// i is a reference to the index of the array (starting from 0)

// The first step is where you want to start; the second step is where you want to end; the third step is how you want to increment
function forLoopIncrement() {
  for (let i = 0; i < 10; i++) {
    // Incrementing the value of i by 1
    console.log(i);
  }
}

// The forLoopDecrement function demonstrates a for loop with decreasing values of i
function forLoopDecrement() {
  for (let i = 10; i > 0; i--) {
    // Decrementing the value of i by 1
    console.log(i);
  }
}

// The forLoopSkip function demonstrates a for loop with a conditional skip
function forLoopSkip() {
  for (let i = 0; i <= 20; i++) {
    // If i is equal to 15, skip to the next iteration
    if (i == 15) {
      continue;
    } else {
      console.log(i);
    }
  }
}

// Call the forLoopIncrement function and display the results
forLoopIncrement();
console.log("==========================");

// Call the forLoopDecrement function and display the results
forLoopDecrement();
console.log("==========================");

// Call the forLoopSkip function and display the results
forLoopSkip();
