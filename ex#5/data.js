let toaster = 18.50;
let shirt = 7.50;
let shirts = 2;

let sum = toaster + shirt * shirts;

let fix = Math.round(sum);

document.getElementById("total").innerHTML =  " Total = $" + sum.toFixed(2) + "<br>" + fix;