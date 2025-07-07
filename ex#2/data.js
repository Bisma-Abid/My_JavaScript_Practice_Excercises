let bankBalance = 100;
let lunch = 20;
let dinner = 50;
let Salery = 200;


let total = bankBalance - lunch - dinner + Salery;

document.getElementById("totalRemainingIncome").innerHTML = "Remaining income is $" + total;