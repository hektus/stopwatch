const seconds = document.querySelector(".seconds");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const items = document.querySelector(".items");
const archive = document.querySelector(".archive");
const deleteBtn = document.querySelector(".delete");
const brush = document.querySelector(".brush");
const questions = document.querySelector(".ask");
const colors = document.querySelector(".colors");

const allBtn = [...document.querySelectorAll(".btn")];

let secondInterval;
let second = 0;
let posCounter = 1;

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

function resetStopwatch() {
  play.classList.remove("active");
  pause.classList.remove("active");
  //add to archive
  if (seconds.textContent === "0.00") {
    return;
  }
  const item = document.createElement("div");
  item.textContent = `${posCounter++}. ${seconds.textContent}`;
  items.appendChild(item);
  clearInterval(secondInterval);
  seconds.textContent = "0.00";
  second = 0;
  play.disabled = false;
}

play.addEventListener("click", startStopwatch);
pause.addEventListener("click", pauseStopwatch);
stop.addEventListener("click", resetStopwatch);
archive.addEventListener("click", () => {
  archive.classList.toggle("active");
  items.classList.toggle("active");
});

deleteBtn.addEventListener("click", () => {
  items.textContent = "";
  posCounter = 1;
});

brush.addEventListener("click", () => {
  colors.classList.toggle("active");
  brush.classList.toggle("active");
});
