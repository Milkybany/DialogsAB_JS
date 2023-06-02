//demo 1-6 - īpašības
//Properties
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  document.getElementById("demo").innerHTML = person["firstname"] + " is " + person["age"] + " years old.";

  //JavaScript for...in Loop
  const person = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  
  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";
  }
  
  document.getElementById("demo2").innerHTML = txt;

//Jaunu rekvizītu pievienošana
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  person.nationality = "English";
  document.getElementById("demo3").innerHTML =
  person.firstname + " is " + person.nationality + ".";

//objekta dzešana
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  delete person.age;
 // delete person["age"]
  document.getElementById("demo4").innerHTML =
  person.firstname + " is " + person.age + " years old.";

//
const myObj = {
    name: "John",
    age: 30,
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
    }
  }
  document.getElementById("demo5").innerHTML = myObj.cars.car2;  
  // 2. myObj.cars['car2'];  
  // 3. myObj["cars"]["car2"];
  /* 4. let p1 = "cars";
let p2 = "car2";
document.getElementById("demo5").innerHTML = myObj[p1][p2]; */

//masīviem masīvos,
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}
document.getElementById("demo6").innerHTML = x;

//metodes
//this
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  document.getElementById("demo7").innerHTML = person.fullName();

  //Object.values()
const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;



  //object constructor

  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age; 

