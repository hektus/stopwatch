const seconds = document.querySelector(".seconds");
const play = document.querySelector(".play");
let second = 0;
let active = false;

function startStopwatch() {
  // sekundy
  active = true;
  setInterval(() => {
    if (active) {
      second++;
      seconds.textContent = second;
      play.disabled = true;
    } else {
      play.disabled = false;
    }
  }, 1000);
}

play.addEventListener("click", startStopwatch);
