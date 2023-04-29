let day;
let dey_= new Date().getDate();

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    console.log(day);
   //day_ = 7;
    break;
 case  7:
    day = "Saturdayyyyyy";    
    console.log(day);
}
document.getElementById("demo_switch").innerHTML = "Today is " + day;


switch (new Date().getDay()) {
    
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
   default:
    text=("Loking forward to the Working day");
  }
  document.getElementById("demo_switch").innerHTML =  document.getElementById("demo_switch").innerHTML + text;