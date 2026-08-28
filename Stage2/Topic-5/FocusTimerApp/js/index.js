const message = document.querySelector("#message");
const timer = document.querySelector("#timer");
const secondsInput = document.querySelector("#secondsInput");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 60;
let interval;
startBtn.addEventListener("click", function () {
  clearInterval(interval);

  if (secondsInput.value === "") {
    seconds = 60;
  } else {
    seconds = Number(secondsInput.value);
  }

  message.textContent = "Timer başladı!";
  interval = setInterval(() => {
    seconds--;
    timer.textContent = seconds;

    if (seconds === 0) {
      clearInterval(interval);

      message.textContent = "Time is up!";
    }
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);

  seconds = 60;

  timer.textContent = seconds;
});
