const buttonsEl = document.querySelectorAll("button");
const inputElField = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue == "=") {
      calculateResult();
    } else if (buttonValue == "del") {
      deleteLast();
    } else {
      appendValue(buttonValue);
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
  try {
    inputElField.value = eval(inputElField.value);
  } catch (e) {
    inputElField.value = e;
    console.log(typeof e);
  }
}

function deleteLast() {
  inputElField.value = inputElField.value.slice(0, -1);
}
