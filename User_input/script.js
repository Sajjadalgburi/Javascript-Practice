
// Easy way with window promp


// let userName = prompt("What is your name?");

// console.log(userName);


// hard way with HTML textbox

let userName; // Undefined

// When clicked, it is goning to take the text within the textbox and assign it to the undefined variable
document.getElementById("myButton").onclick = function () {
    userName= document.getElementById("myText").value;
    
    // This will log the value of the textbox to the console
    console.log(userName);
}