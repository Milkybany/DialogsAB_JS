const count = document.getElementById('count');
const countUP = document.getElementById('countUP');
const poga = document.getElementById('poga');

poga.addEventListener("click", function() {
  if(countUP.querySelector('#poga')!==null){
  countUP.removeChild(countUP.lastElementChild);
  count.append(poga);
  poga.innerHTML = "Time backward";
  count.style.display = 'flex';
  countUP.style.display = 'none';
}
  else{
    count.removeChild(count.lastElementChild);
    countUP.append(poga);
    poga.innerHTML = "Time forward";
    count.style.display = 'none';
    countUP.style.display = 'flex';
    }
});

const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
/* setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);
*/


// Run every second
setInterval(updateCountdown, 1000);