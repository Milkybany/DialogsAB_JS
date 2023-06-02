var x1 = 1, 
x2 = 2, 
x3 = 3;
var delta_x1 = x2 - x1;
var delta_x2 = x3 - x2;

var x_coord = [11, 22, 306];
console.log(x_coord[0]);
console.log(x_coord[1]);
console.log(x_coord[2]);

var coord = [
[11, 22, 306],
[89, 96, 45]
];
console.log(coord[0]);
onsole.log(coord[0][0]);

//ievieto jaunu elementu rinda
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits;

//const points = new Array(60, 50, 1, 5, 25, 10);
 const points = [70, 100, 1, 5, 25, 10];
 document.getElementById("demo3").innerHTML = points[0]; 

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo4").innerHTML = cars;
//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("rinda").innerHTML = fruits.toString();

//sadala virkni ar izveleto zimi
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo *").innerHTML = fruits.join(" * ");

//noņem pedejo elementu
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo5").innerHTML = fruits;
fruits.pop();
document.getElementById("demo6").innerHTML = fruits;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo7").innerHTML = fruits.shift();
document.getElementById("demo8").innerHTML = fruits;

// masiva apvienošana
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("demo9").innerHTML = myChildren;

//ievieto papildus elementus
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo10").innerHTML = fruits;

fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo11").innerHTML = fruits;

