document.querySelector('h1').innerHTML = "Document Object Model";
document.querySelector('body').style.textAlign = "center";
document.querySelector('body').style.backgroundColor = "orange";
document.querySelector('body').style.color = "white";
document.querySelector('h1').style.fontSize = "3rem";
document.querySelector('.subscribe').innerHTML = "Youtube Subscribe Button";
document.querySelector('.subscribe-btn').style.backgroundColor = "red";
document.querySelector('.subscribe-btn').style.color = "white";
document.querySelector('.subscribe-btn').style.paddingLeft = "20px";
document.querySelector('.subscribe-btn').style.paddingRight = "10px";
document.querySelector('.subscribe-btn').style.fontSize = "20px";
document.querySelector('.subscribe-btn').style.borderRadius = "30px";
document.querySelector('.subscribe-btn').style.padding = "20px";
document.querySelector('.subscribe-btn').style.border = "none";

// subscribe

function subscribeYoutubeButton() {
  let subscribeButton = document.querySelector('.subscribe-btn');

  if(subscribeButton.innerHTML === "Subscribe"){
     subscribeButton.innerHTML = "Subscribed";
  }else{
     subscribeButton.innerHTML = "Subscribe";
  }
}

//calculate cost

function calculateCost(){
  let amount = document.querySelector(".cost-input");
  let cost = Number(amount.value);
 if (cost < 0) {
    document.querySelector('.total').innerHTML = '❌ You can\'t add less than 0 carts!';
  } else if (cost < 40) {
    cost += 10;
    document.querySelector('.total').innerHTML = `Your total cost: $${cost}`;
  } else {
    document.querySelector('.total').innerHTML = `Your total cost with discount on shipping: $${cost}`;
  }
}


function clickKey(event){
  if(event.key === "Enter"){
    calculateCost();
  }
}