
// const = a variable that cant be changed


// let pi = 3.141592653589793;

// use const when a var will not change!!
const PI = 3.141592653589793;

let radius;
let circumference;

// This input will be a string therefire convert it to a number
radius = window.prompt("What is the radius of the circle?");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is: " + circumference);
