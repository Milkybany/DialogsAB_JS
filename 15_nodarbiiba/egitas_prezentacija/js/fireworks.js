//console.log(fireworks);
var fireworks=document.getElementById("fireworks");
//console.log(fireworks);

function fireworksTime(){
   // console.log(fireworks==0);
   // console.log(fireworks.src=="");
   // console.log(fireworks.src);
    if (!fireworks.src) {
        fireworks.src="https://media.tenor.com/fNBIYpimgSIAAAAi/fireworks-joypixels.gif";
        //console.log(fireworks);  
        setTimeout(fireworksTime, 10000);
    }
    else {
        //fireworks.src="";// NB!!! nedrīkst
        fireworks.removeAttribute('src');
        //console.log(fireworks);
        setTimeout(fireworksTime, 6000);
    }
}
fireworksTime();
/*
setInterval(fireworksTime, 6000);

setTimeout(fireworksTime, 10000);
*/