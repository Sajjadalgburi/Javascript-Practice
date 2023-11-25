//  Unassigned variables
let a;
let b;
let c;

/*
a = window.prompt("What is side A?");
a = Number(a);


b = window.prompt("What is side B?");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);

c = Math.sqrt(c);

console.log("Side C is: " + c);
*/

document.getElementById("submitButton").onclick = function () {
  a = document.getElementById("aTextBox").value;
  a = Number(a);

  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = Math.pow(a, 2) + Math.pow(b, 2);

  c = Math.sqrt(c);

  document.getElementById("cLabel").innerHTML = "Side C is: " + c;
};
