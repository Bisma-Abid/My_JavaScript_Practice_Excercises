let rice = 50;
let icecream = 30;
let pasta = 60;
let total = rice + icecream +  pasta;

let eachFriendBill = total;

let TrioBill = total * 3;

let perBill = TrioBill / 3;

document.getElementById("resturantBill").innerHTML = "Each friend make a Bill of $" + eachFriendBill + "<br>3 of them make total Bill $" + TrioBill + "<br> Per Friend Bill is $" + perBill;