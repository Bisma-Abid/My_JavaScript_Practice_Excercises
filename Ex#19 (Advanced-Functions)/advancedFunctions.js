let html = `Arrow function`;
console.log(html);

let multiply = (num1,num2) => {
  return num1 * num2;
}

console.log(multiply(2,3));
console.log(multiply(71,9));

html = `Arrow function on one line...`;
console.log(html);

let Multiply = (num1,num2) => num1 * num2;
console.log(Multiply(4,8));

html = `Arrow function with parameters counting the positive numbers in an array`;
console.log(html);

const countPositive = (array) => {
 let count = 0;
   array.forEach((num) => {
      if(num >= 0){
        count++;
      }
   });
   return count;
};

let total = countPositive([1,-4,-6,9,0,8,2,4,7,-7,-3,20]);
console.log(`Positive Numbers : ${total}`);

html = `Multiply each number in an array by a given number`;
console.log(html);
/*
const addNum = (array,num) => {
 array.map((nums) =>
   return nums * num;
  )}
*/

const addNum = (array,num) => array.map(nums => nums * num);
console.log(addNum([1,6,7,3,2],2));

html = `Remove only 1st two eggs from array , using Filter method :`;
console.log(html);

let removeEgg = (array) => {
 let eggCount = 0;
  return array.filter((item) => {
     if(item.toLowerCase() === "egg"){
       eggCount++;
       return eggCount > 2;
     }
      return true; // Keep all non-egg items
  });
}
console.log(removeEgg(["peanuts","butter","egg","milk","sugar","Honey","egg","fruits","egg"]));

let eventElement = document.querySelector('.check-console');
eventElement.addEventListener('click', () => {
    document.querySelector('.para').innerHTML = "You can check console for all the solutions";
});