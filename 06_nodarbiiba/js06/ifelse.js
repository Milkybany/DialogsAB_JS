const hour = new Date().getHours(); 
let greeting = "Good ";

/*
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
*/
console.log(greeting);

if (hour < 18) {
    //greeting = "Good";
    //console.log(greeting);
    greeting = greeting + "day";
    console.log(greeting);}
   else {
    //greeting = "Good";
    greeting = greeting + "evening";
  }

  console.log(greeting);
  


document.getElementById("demo_ifelse").innerHTML = greeting;