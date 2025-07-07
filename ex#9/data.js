let coffee = 40;
let bagel = 19;

let totalCost = coffee + bagel;

document.getElementById("concatination").innerHTML = 
"Total cost is $" + totalCost ;

document.getElementById("interplation").innerHTML = 
`Total Cost is : $${totalCost}`;

function showCost() {
   let coffee = 40;
let bagel = 19;

let totalCost = coffee + bagel;
   alert(`Total Cost is : $${totalCost}`);
} 

let Coffee = 599;
let Bagel = 295;

let Total = (Coffee + Bagel) / 100;

document.getElementById("Cost").innerHTML = "Total Cost is $" + Total; 
document.getElementById("CostI").innerHTML = `Total Cost is $${Total}`; 

function show() {
   let Coffee = 599;
let Bagel = 295;

let Total = (Coffee + Bagel) / 100;
 alert("Total Cost is : $" + Total );
}

function showPopup() {
   let Coffee = 599;
let Bagel = 295;

let Total = (Coffee + Bagel) / 100;
 alert(`Total Cost = $${Total}\nThank You , Come Again !`);
}