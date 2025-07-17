// some basics about array
let numbers = [1,4,6,7];

console.log(numbers);
console.log(typeof numbers);
console.log(numbers[0,2]);
numbers.push("Bisma");
console.log(numbers);
numbers.splice(5);
console.log(numbers);

// some basics about loops
// while loop
let i = 0;
while(i <= 5){
 i++;
 console.log(i);

}

// for loop

for(i = 0; i <= 6 ; i ++){
 console.log(i);
}

// some excersises
// exQ 1
const nums = [10,20,30];
nums[2] = 99;
console.log(nums);

const names = ['bisma','manahil','iram','zobia','Bisma'];
function getlastValue(){
 return names[names.length - 1];
}

console.log(getlastValue());

// exQ 2


// exQ 2(swap the array)


function swapArray(arr){
 if(arr.length < 2){
   return arr;
 }
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}

console.log(swapArray([1, 20, 22, 24, 5]));

// exQ 3 (show even numbers 0 to 10)
let html ='show even numbers 0 to 10';
console.log(html);
for(let i = 0; i <= 10; i += 2){
 console.log(i);
}

// exQ 4 (reverse)

html ='Reverse the Loop';
console.log(html);

for(let i = 5; i >= 0; i--){
 console.log(i);
}

// do exQ 3 and 4 using while loop

let a = 0;
while(a <= 10){
 a += 2;
 console.log(a);
}


let b = 6;
while( b >= 1){
 b--;
 console.log(b);
}

// exQ 5 (add array no by 1)

let num = [1,2,3];

let num2 = num.map((nums)=> {
  return nums + 1;
});

console.log(num2);

let numbered = [-1,0,1,100];

let number = numbered.map((numbering)=> {
  return numbering + 1;
});

console.log(number);

// exQ 7 (add array & num)

function sumArray(array,num){
  let result = [];
  for(let i=0; i < array.length; i++){
   result.push(array[i] + num);
  }
   return result;
}

console.log(sumArray([1,2,3],2));

// exQ 8 (add array & array)

function addArray(array1,array2){
  let result = [];
  if(array1.length !== array2.length){
   return 'Arrays should be of same length';
  }
  for(let i = 0; i < array1.length; i++){
    result.push(array1[i] + array2[i]);
  }
  return result;
}
  console.log(addArray([1,2,3],[4,5,6]));

  // exQ 9 (return array of numbers which are greater then 0)

  function countPositive(nums){
    let result = [];
    for(let i = 0; i < nums.length; i++){
      if(nums[i] > 0){
       result.push(nums[i]);
      }
    }
    return result;

    if(nums[i] < 0){
     return 'No number is greater then 0'; 
    }
  }
  console.log(countPositive([-2,5,-5,-6,-9,0,2,4,6,7,-10]));


  // exQ 10 (find min and max values)

  //  function minMax(nums){
  //    let min = nums[0];
  //    let max = nums[0];
  //    for(let i = 1; i < nums.length; i++){
  //      if(nums[i] < min){
  //       min = nums[i];
  //      }

  //      if(nums[i] > max){
  //       max = nums[i];
  //      }
  //    }
  //    return {min: min, max: max};
  //  }
  //  console.log(minMax([1,-3,0,9,-8,54,33,20]));

  // -------------------------------------------------
  
  //  function minMax(nums){
  //      if(nums.length === 0){
  //        return {min: null,max:null};
  //      }
  //    let min = nums[0];
  //    let max = nums[0];
  //    for(let i = 1; i < nums.length; i++){
  //      if(nums[i] < min){
  //       min = nums[i];
  //      }

  //      if(nums[i] > max){
  //       max = nums[i];
  //      }

  //    }
  //    return {min: min, max: max};
  //  }
  //  console.log(minMax([]));

  // ---------------- Updated version -----------------


  function minMax(nums){
       if(nums.length === 0){
         return {min: null,max:null};
       }

       

     let min = nums[0];
     let max = nums[0];
     for(let i = 1; i < nums.length; i++){
       if(nums[i] < min){
        min = nums[i];
       }

       if(nums[i] > max){
        max = nums[i];
       }
       
        if(nums.length === 1){
          min = nums[0];
          max = nums[0];
         return {min: min,max:max };
       }
     }
     return {min: min, max: max};
   }
   console.log(minMax([8,0,-1]));

   // exQ 11 (count words)

   function countWords(words){
     let result = {};
     for(let i = 0; i < words.length; i++){
      let word = words[i];
      if(result[word]){
        result[word] += 1;
      }else {
        result[word] = 1;
      }
     }
     return result;
   }

   console.log(countWords(["banana","apple","apple","graps","apple","banana","graps","graps","orange","mango","apple","banana","mango"]));