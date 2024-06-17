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
  //???
  startTime = Date.now() - elapsedTime;

  // setInterval is a built-in JS function.
  // syntax e.g: setInterval(func, delay)
  // The function, `func`, is executed every delay MILLISECONDS
  // First acll is made after delay milliseconds
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = elapsedTime;
  }, 10);
}

function stopTimer() {
  console.log("Timer Stop!!");
}

function resetTimer() {
  console.log("Timer reset!!");
}
