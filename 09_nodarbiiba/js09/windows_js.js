//https://www.javascripttutorial.net/javascript-bom

var counter = 1;
var showCounter = () => console.log(counter);

//let counter = 1;
//let showCounter = () => console.log(counter);

console.log(counter);
showCounter();

console.log(window.counter);
window.showCounter();
//showCounter()- funkcija

console.log('window.innerWidth: ' + window.innerWidth);
console.log('document.documentElement.clientWidth: ' + document.documentElement.clientWidth);
console.log('document.body.clientWidth: ' + document.body.clientWidth);
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log(`window.outerWidth: ${window.outerWidth}`);

const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;  

// loga atveršna un nomaiņa

let features = 'height=600,width=800',
    url = 'https://www.javascripttutorial.net/javascript-bom/javascript-window/';

let jsWindow = window.open(url, 'about', features);

/*
setTimeout(() => {
    //window.open('http://localhost/js/contact.html', 'about')
    //window.open('http://127.0.0.1:5500', 'about')
    let jsWindow = window.open(url, 'about', features);
}, 20000);
*/


//izmera nomaiņa
/*
setTimeout(() => {
    jsWindow.resizeTo(600, 300);
}, 3000);
*/
//aizveršana
/*
setTimeout(() => {
    jsWindow.close();
}, 5000);
*/
/*
setTimeout(() => {
    alert('15 seconds has been passed!')
}, 15000);
*/
// labak neizmantot(jagaida atbilde)
/*
let result = confirm('Are you sure you want to delete?');
let message = result ? 'You clicked the OK button' :
    'You clicked the Cancel button';
alert(message);
*/

/*
let lang = prompt('What is your favorite programming language?');
let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
    `It's ${lang}`;
alert(feedback);
*/
var timeoutID_1;
var timeoutID_2;

function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo1!');
    timeoutID_2 = setTimeout(alert, 5000, 'setTimeout Demo 2!');
}

function cancelAlert_1() {
    console.log(timeoutID_1);
    console.log(clearTimeout(timeoutID_1));
    //console.log(timeoutID);
    //console.log(clearTimeout(timeoutID));
}

function cancelAlert_2() {
    console.log(timeoutID_2);
    console.log(clearTimeout(timeoutID_2));
}

let intervalID = setInterval(callback, delay,[arg1, arg2,]);

let intervalID;
 
function toggleColor() {
  let e = document.getElementById('flashtext');
  e.style.color = e.style.color == 'red' ? 'blue' : 'red';
}

function stop() {
  clearInterval(intervalID);
}

function start() {
   intervalID = setInterval(toggleColor, 1000); 
}