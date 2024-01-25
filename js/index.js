console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

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

//Division only

const formDivide = document.querySelector("[data-js=form2]");

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

  try {
    divisionResult.textContent = divideOnly(firstNumber, secondNumber);
  } catch (error) {
    // console.log("You shall not divide by zero")
    errorDisplay2.textContent = "You shall not divide by zero! Please don't!";
  }
});

//Better calculator "Kluger Hans"
const betterForm = document.querySelector("[data-js=better-form]");
const betterResult = document.querySelector("[data-js=better-result]");
const errorDisplay3 = document.querySelector("[data-js=error-display3]");

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
function divide(a, b) {
  if (b === 0) {
    throw new Error("Though shall not divide by zero!");
  }
  return a / b;
}

betterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const rawString = event.target.betterInput.value;
  if (rawString.includes("+")) {
    const firstNumber = Number(rawString.split("+")[0]);
    const secondNumber = Number(rawString.split("+")[1]);
    betterResult.textContent = addition(firstNumber, secondNumber);
  } else if (rawString.includes("-")) {
    const firstNumber = Number(rawString.split("-")[0]);
    const secondNumber = Number(rawString.split("-")[1]);
    betterResult.textContent = subtraction(firstNumber, secondNumber);
  } else if (rawString.includes("*")) {
    const firstNumber = Number(rawString.split("*")[0]);
    const secondNumber = Number(rawString.split("*")[1]);
    betterResult.textContent = multiplication(firstNumber, secondNumber);
  } else if (rawString.includes("/")) {
    const firstNumber = Number(rawString.split("/")[0]);
    const secondNumber = Number(rawString.split("/")[1]);
    try {
      betterResult.textContent = divide(firstNumber, secondNumber);
    } catch (error) {
      errorDisplay3.textContent = "You shall not divide by zero! Please don't!";
    }
  } else if (
    !rawString.includes("+") ||
    !rawString.includes("-") ||
    !rawString.includes("*") ||
    !rawString.includes("/")
  ) {
    errorDisplay3.textContent = "No known operation";
  } else {
    errorDisplay3.textContent = "Else: No known operation";
  }
});
