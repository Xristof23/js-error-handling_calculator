console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

const formDivide = document.querySelector("[data-js=form2]");

const errorDisplay = document.querySelector("[data-js=error-display]");
const errorDisplay2 = document.querySelector("[data-js=error-display2]");
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
  } catch (error) {
    errorDisplay.textContent = "You shall not divide by zero! Please don't!";
  }
});

function divideOnly(a, b) {
  if (b === 0) {
    throw new Error("Though shall not divide by zero!");
  }
  return a / b;
}
const divisionResult = document.querySelector("[data-js=division-result]");
formDivide.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.dividend.value);
  const secondNumber = Number(event.target.divisor.value);
  const quotient = divideOnly(firstNumber, secondNumber);
  divisionResult.textContent = quotient;
});
