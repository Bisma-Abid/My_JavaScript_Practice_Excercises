let html = `Array with forEach loop is a best practice...`;
console.log(html);

[
 "fruits",
 "vegetables",
 "grains",
 "dairy",
 "meat",
].forEach(function(value,index){
  console.log(index + " : " + value);
});

html = `function inside variable:`;
console.log(html);
const add = function(){
   console.log(2+3);
}
add();
add();

html = `function inside variable with parameters:`;
console.log(html);

function runTwice(run){
  run();
  run();
}
function adding(){
  console.log(2+3);
}

runTwice(function(){
   console.log("Running function twice:");
});

runTwice(adding);

function changeText(){
   document.querySelector(".click-me").innerHTML = "Loading...";
  setTimeout(function(){
   document.querySelector(".click-me").innerHTML = "Finished!";
 },3000);
}

html = `setTimeout function:`;
console.log(html);
document.querySelector('h3').innerHTML = "setTimeout function example :";

let timeoutId ;
/*
function addCart(){
  
    document.querySelector(".show").innerHTML = "Added";
    timeoutId = setTimeout(function(){
      document.querySelector(".show").innerHTML = "";
    },3000);
}
*/

   function addCart(){
   clearInterval(timeoutId);
    document.querySelector(".show").innerHTML = "Added";
    timeoutId = setTimeout(function(){
      document.querySelector(".show").innerHTML = "";
    },3000);
}

  setInterval(function(){
     let newMessages = Math.floor(Math.random() * 10);
     document.title = "("+ newMessages + ")"   +" "+ "New messages";
  },1000);

  let newMessages = 2;

  function updateInterval(){
     if(newMessages > 0){
      document.title = `(${newMessages}) New messages`;
     }else {
      document.title = "App";
     }
     
  }

  function addMessage(){
     newMessages++;
     updateInterval();
  }

  function removeMessage(){
    if(newMessages > 0){
      newMessages--;
    }
        updateInterval();
  }
  setInterval(updateInterval,1000);