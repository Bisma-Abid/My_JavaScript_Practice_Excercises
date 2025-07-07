function FahrenheitToCelsius(celcious){
   let Fahrenheit = (celsius * 9/5) - 32;
   return Fahrenheit;
}

function CelsiusToFahrenheit(fahrenheit){
   let celsius = (fahrenheit + 32) * 5/9;
   return celsius;
}

let tempInC = 25;
let tempInF = 77;


 document.getElementById("cToF").innerHTML = tempInC + "°C is equal to " + CelsiusToFahrenheit(tempInC) + "°F";
    document.getElementById("fToC").innerHTML = tempInF + "°F is equal to " + FahrenheitToCelsius(tempInF).toFixed(2) + "°C";