let html =`Question: Write a function that searches for the word "search" in an array and returns its index. If the word is not found, return -1.
Solution:`;
console.log(html);

function search(array){
  let searchIndex = [];
   for(let i=0;i < array.length; i++){
     if(array[i].toLowerCase() === "search"){
       return i;
     }
     
   }
   return -1;
}

console.log(search(["My","Search","is","You","search"]));
console.log(search(["I","can't","found","You"]));


html =`uestion: Write a function that searches for a word in an array and returns its index. If the word is not found, return -1.
Solution:`;
console.log(html);

function findIndex(array,word){
   const indexList = [];
   for(let i = 0; i < array.length; i++){
      if(array[i].toLowerCase() === word.toLowerCase()){
        return i;
      }
   }
   return -1;
  }

  console.log(findIndex(["Red","blue","black","green","purple","gray","Purple"],"Purple"));
  console.log(findIndex(["Red","blue","black","green","purple","gray","Purple"],"white"));

html =`Question: Write a function that removes the word "egg" from an array of food items.(remove only first two eggs not all...)
solution:`;
console.log(html);

  function removeEgg(foods){
    const foodList = [];
    let egg = 0;
     for(let i = 0; i < foods.length; i++){
       if(foods[i].toLowerCase() === "egg" && egg < 2){
       
         egg++;
         continue;
        
         
       }
       foodList.push(foods[i]);
     }
     return foodList;
  }

  console.log(removeEgg(["bread","butter","cheese","egg","milk","egg","meat","tea","egg","sauses","egg","coffee"]));

html =`Question: Write a function that removes the last two occurrences of the word "egg" from an array of food items.
Solution:`;
console.log(html);

  function removeLastTwoEggs(foods){
    let eggCount = 0;
    let foodItems = [];
    for(let i = foods.length - 1; i >= 0; i--){
       if(foods[i].toLowerCase() === "egg" && eggCount < 2){
         eggCount++;
         continue;
       }
       foodItems.unshift(foods[i]);
    }
      return foodItems;
  }

  
  console.log(removeLastTwoEggs(["bread","butter","cheese","egg","milk","egg","meat","tea","egg","sauses","egg","coffee"]));


  html = `Question: Write a function that removes the last two occurrences of the word "egg" from an array of food items, ensuring the original array remains unchanged.
  Solution:`;
  console.log(html); 

  function removeLastTwoEggs(foods) {
  // Make a shallow copy of the original array
  const copyFoods = foods.slice();

  let eggCount = 0;
  let foodItems = [];

  for (let i = copyFoods.length - 1; i >= 0; i--) {
    if (copyFoods[i].toLowerCase() === "egg" && eggCount < 2) {
      eggCount++;
      continue;
    }
    foodItems.unshift(copyFoods[i]); // safe because copyFoods is a copy
  }

  return foodItems;
}

const myFoodList = [
  "bread", "butter", "cheese", "egg", "milk",
  "egg", "meat", "tea", "egg", "sauses", "egg", "coffee"
];

console.log("Original Array:", myFoodList);
console.log("Modified Copy:", removeLastTwoEggs(myFoodList));

html = `Question: Write a function that prints the numbers from 0 to 20, but for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
Solution:`;
console.log(html);

 function fizzBuzz(){
 for(let i = 0; i <= 20;i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
 }else if(i % 3 === 0){
     console.log("Fizz");
 }else if(i % 5 === 0){
    console.log("Buzz");
 }else{
   console.log(i);
 }
 
}
}

fizzBuzz();

html = `Question : Display unique vegetables from an array.
Solution:`;
console.log(html);  
function uniqueVegitables(array){
 let veg = [];
 for(let i =0; i < array.length; i++){
    if(veg.indexOf(array[i]) === -1){
       veg.push(array[i]);
    }
 }
 return veg;
} 

console.log(uniqueVegitables(["tomato","onion","potato","tomato","carrot","onion","cabbage","carrot"]));