const daysUP = document.getElementById('daysUP');
const hoursUP = document.getElementById('hoursUP');
const minutesUP = document.getElementById('minutesUP');
const secondsUP = document.getElementById('secondsUP');
//const countUP = document.getElementById('countUP');
const yearUP = document.getElementById('yearUP');
const loadingUP = document.getElementById('loadingUP');

const currentYearUP = new Date().getFullYear();

const currentYearTimeUP = new Date(`January 01 ${currentYearUP} 00:00:00`);

// Set background year
year.innerText = currentYearUP;


// Update countdown time
function updateCountUP() {
  const currentTimeUP = new Date();
  const diff = currentTimeUP - currentYearTimeUP;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  daysUP.innerHTML = d;
  hoursUP.innerHTML = h < 10 ? '0' + h : h;
  minutesUP.innerHTML = m < 10 ? '0' + m : m;
  secondsUP.innerHTML = s < 10 ? '0' + s : s;
}


// Show spinner before countdown
/*
setTimeout(() => {
    loadingUP.remove();
    countUP.style.display = 'flex';
  }, 1000);
  */

  
  // Run every second
  setInterval(updateCountUP, 1000);
  
  
  function stopTimeUp() {
    clearInterval(updateCountUP);
  }
 