const seconds = document.querySelector(".seconds");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
let secondInterval;
let second = 0;

function startStopwatch() {
  play.classList.add("active");
  pause.classList.remove("active");
  secondInterval = setInterval(() => {
    second++;
    seconds.textContent = (second / 100).toFixed(2);
    play.disabled = true;
  }, 10);
}

function pauseStopwatch() {
  clearInterval(secondInterval);
  play.disabled = false;
  play.classList.remove("active");
  pause.classList.add("active");
}

pause.addEventListener("click", pauseStopwatch);
play.addEventListener("click", startStopwatch);
