console.log(document.querySelector('button'));
document.querySelector('button').innerText = "Task Done";

function forHead(){
  document.querySelector('.result').innerText = 'You choose : heads';
}
function forTail(){
  document.querySelector('.result').innerText = 'You choose : tails';
}

function handleInput(){
 let showInput = document.querySelector('.input-class');
 let name = showInput.value;
 if(name){
   document.querySelector('.show-value').innerText = `Your Name is ${name}`;
 }
}

function handleKey(event){
  if(event.key === "Enter"){
    handleInput();
     }
}

function handleUpKey(event){
  let text = event.target.value;
   document.querySelector('.show-text').innerHTML = text;
}