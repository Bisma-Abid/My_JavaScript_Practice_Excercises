let toaster = 18.50;
let shirt = 7.50;
let shirts = 2;

let sum = toaster + shirt * shirts;

let tax = sum * 0.1;

let Tax = sum * 0.2;

document.getElementById("total").innerHTML =  " Total = $" + sum.toFixed(2) + "<br>Its 10% Tax will be $" + tax + "<br>Its 20% Tax will be = $" + Tax;