const startButton = document.querySelector("#start");
const timer = document.querySelector(".timerField");
const secondsInput = document.querySelector("#seconds");
const stopButton = document.querySelector("#stop");

let timerId = null;

startButton.onclick = () => {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }

  let timerLeft = Number(secondsInput.value);

  if (timerLeft <= 0 || isNaN(timerLeft)) {
    alert("Введите положительное число");
    return;
  }

  timer.textContent = timerLeft;

  timerId = setTimeout(() => updateTimer(timerLeft), 1000);
};

stopButton.onclick = () => {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
    timer.textContent = "0";
  }
};

function updateTimer(timerLeft) {
  timerLeft--;
  timer.textContent = timerLeft;

  if (timerLeft <= 0) {
    alert("Таймер закончился");
    timerId = null;
  } else {
    timerId = setTimeout(() => updateTimer(timerLeft), 1000);
  }
}
