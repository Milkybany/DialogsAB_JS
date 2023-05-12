//console.log("Hello World!");

//skaita no 0-9

/*let text = "";
let i = 0;
while (i <= 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo_while").innerHTML = text;
*/

//katrai nākamajai vērtībai pieskaita +2

/*
//1. varians
let text = "";
let i = 1;
while (i <= 20) {
    if (i % 2 == 0)
  text += "<br>" + i;
  i++;
}
document.getElementById("demo_while").innerHTML = text;

//2. variants
let text = "";
let i = 1;
while (i <= 20) {
    if (i % 2 == 0)
  text += "<br>" + i;
  i = i + 2;
}
document.getElementById("demo_while").innerHTML = text;

*/

//skaita līdz 20 un ja cipars ir mazāks par 10 priekšā pieliek 0
/*
let text = "";
let i = 1;
while (i <= 20) {
    if (i < 10)
        text += "<br>" + "0" + i;
    
    else
text += "<br>" + i;
    
  
  i++;
}
document.getElementById("demo_while").innerHTML = text;

*/

let text = "";
let i = 1;
while (i <= 20) {
  console.log("i: " + i);
  console.log("i%2: " + (i % 2));
  if (i % 2 == 0) {
    text += "<br>" + i;
  }
  i++;
}
document.getElementById("demo_while").innerHTML = text;


//LABS VARIANTS TABULAI(Skaita lidz 200 un izlidzīna vusu ar 3 cipariem)

text = "";
i = 1;
while (i <= 200) {
    if (i < 10) {
  text += "<br>" + 0 + 0 + i; // text = text + "<br>" + i;
    } else if (i < 100) {
        text += "<br>" + 0 + i;
    } else {
        text += "<br>" + i;
    }
    i++; // i++; // i = i + 1 // 
  }
document.getElementById("demo_while").innerHTML = text;
