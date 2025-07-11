const basketBall = {
 name : 'basketball',
 price : 2095,
 "delivery-time" : '3 days',
}

console.log(basketBall);
 basketBall.price = 500;
const updatePrice = basketBall.price;
console.log(`Updated Price is : ${updatePrice}`);

// check cheaper product :

function comparePrice(product1,product2){
  if(product1.price < product2.price){
     return product1;
  }else {
   return product2;
  }
}

const productA = {
 name : "basket ball",
 price : 9000
}

const productB = {
 name : "foot ball",
 price : 5500
}

const cheaperProduct = comparePrice(productA,productB);

console.log(`Cheaper product is ${cheaperProduct.name} as its price is : ${cheaperProduct.price}Rs. `);


// compare products 
/*
const cosmetic1 = {
  name : "Eyeshadow",
  price : 2300
}

const cosmetic2 = {
   name : "Eyeshadow",
   price : 2300
}

let p1n = cosmetic1.name;
let p1p = cosmetic1.price;
let p2n = cosmetic2.name;
let p2p = cosmetic2.price;


function compareProducts(product1,product2){
  if(product1 === product2){
    return true;
  }else {
   return false;
  }
}

const compare = compareProducts(p1n && p1p , p2n && p2p);

console.log(compare);

// as it only compare price as p1n and p2n are truthy values but we had to compare whole object
*/

function compare(p1,p2){
  if(p1.name === p2.name && p1.price === p2.price){
    return true;
  }else{
    return false;
  }
}

const cosmetic1 = {
  name : "Eyeshadow",
  price : 2300
}

const cosmetic2 = {
   name : "lipstick",
   price : 1600
}

const isSame = compare(cosmetic1,cosmetic2);
console.log(isSame);

//string to lowercase

let object1 = {
  message : "GOOd MorNing",
}

const message = object1.message;

console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.repeat(10));