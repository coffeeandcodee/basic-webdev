const buttonsEl = document.querySelectorAll("button");
const inputElField = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (/[0-9, +, -, /, *]/.test(buttonValue)) {
      appendValue(buttonValue);
    } else if (buttonValue == "=") {
      calculateResult();
    }
  });
}

function clearResult() {
  inputElField.value = "";
}

function appendValue(value) {
  // made the mistake of inputElField += value initially
  inputElField.value += value;
}

function calculateResult() {
  inputElField.value = eval(inputElField.value);
}
