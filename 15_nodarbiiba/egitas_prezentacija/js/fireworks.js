var fireworks=document.getElementById("fireworks");

function fireworksTime(){
    if (fireworks==0) {
        
    }
    else {
        fireworks.src="https://media.tenor.com/fNBIYpimgSIAAAAi/fireworks-joypixels.gif";
    }
}

setInterval(fireworksTime, 6000);

setTimeout(fireworksTime, 10000);