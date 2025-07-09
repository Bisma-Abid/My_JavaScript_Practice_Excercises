console.log('For an Hour .....')
let hour = 16;
let name = 'Bisma';

if(hour >= 6 && hour <= 12){
  console.log(`Good morning! ${name}`);
}else if(hour >= 13 && hour <= 17){
  console.log(`Good Afternoon! ${name}`);
}else if(hour >= 18 && hour <= 20){
  console.log(`Good Evening! ${name}`);
}else {
  console.log(`Good Night! ${name}`);
}

console.log('For discount in Amusement park !')

let age = 3;
let isHoliday = false;
if((age >= 1 && age < 6 || age > 65) && !isHoliday ){
   console.log('Discount!' );
   console.log('As its not a holiday!' );

}else {
   console.log('No discount!');
     console.log('Its Holiday!');
}
 
