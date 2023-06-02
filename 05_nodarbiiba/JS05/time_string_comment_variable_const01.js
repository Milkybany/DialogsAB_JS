const DATI = 17;
var ms = Date.now();  
console.log(ms);

console.log(
    "Mainīgā dati vērtība - " + DATI + ", datu tips - " + typeof DATI
    );
console.log(typeof "Volvo");
let x = DATI + "Volvo";
console.log(typeof x);

console.log("Paragrāfa saturs pirms izmaiņām: ");
console.log(document.getElementById("demo").innerHTML);

//js komentars- viena rinda
/*
js komentars-vairakas rindas
*/
//DATI = 18


ms = Date.now();  
console.log(ms);
document.getElementById("demo").innerHTML = x;
console.log("Paragrāfa saturs pēc izmaiņām: ");
console.log(document.getElementById("demo").innerHTML);

console.log(
    "Mainīgā dati vērtība - " + DATI + ", datu tips - " + typeof DATI
    );

ms = Date.now();  
console.log(ms);

console.log(
    "Mainīgā dati vērtība - " + DATI + ", datu tips - " + typeof DATI
    );

