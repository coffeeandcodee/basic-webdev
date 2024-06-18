// the syntax is .querySelector(".[className]")
const timerEl = document.querySelector(".timer");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

//alternative simply ...("click", startTimer)
//Note parentheses are omitted
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  //Observe what happens when you get rid of the - elapsedTime. Why ?
  //Initiating time when you click startTimer
  startTime = Date.now() - elapsedTime;
  // setInterval is a built-in JS function.
  // syntax e.g: setInterval(func, delay)
  // The function, `func`, is executed every delay MILLISECONDS
  // First call  is made after delay milliseconds
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = myFormatTime(elapsedTime);
  }, 10);
}

function myFormatTime(elapsedTime) {
  //i.e, when we complete a second, "wrap back round" and start counting
  //milisiseconds again
  const centiseconds = digitFormatter((elapsedTime / 10) % 100);
  const seconds = digitFormatter((elapsedTime / 1000) % 60);
  const minutes = digitFormatter((elapsedTime / (1000 * 60)) % 60);
  const hours = digitFormatter(elapsedTime / (1000 * 60 * 60));

  return `${hours}:${minutes}:${seconds}:${centiseconds}`;
}

function stopTimer() {
  console.log("Timer Stop!!");
}

function resetTimer() {
  console.log("Timer reset!!");
}

function digitFormatter(value) {
  return value >= 10 ? Math.floor(value).toString() : "0" + Math.floor(value);
}
