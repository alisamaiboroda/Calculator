let buttonOperation = document.getElementsByClassName("button-operation");
let input1 = document.getElementById("number-1");
let input2 = document.getElementById("number-2");

function makeOperation(operationCode) {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let result;
  if (operationCode === "+") {
    result = number1 + number2;
  } else if (operationCode === "-") {
    result = number1 - number2;
  } else if (operationCode === "*") {
    result = number1 * number2;
  } else if (operationCode === "/") {
    result = number1 / number2;
  } else if (operationCode === "C") {
    result = "";
    input1.value = "";
    input2.value = "";
  }
  document.getElementById("result-input").value = result;
}

function onOperationButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let operation = clickedElement.dataset.operation;
  makeOperation(operation);
}

for (let i = 0; i < buttonOperation.length; i++) {
  let button = buttonOperation[i];
  button.addEventListener("click", onOperationButtonClick);
}
