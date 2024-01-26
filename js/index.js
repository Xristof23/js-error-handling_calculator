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

//basic calculations(auslagern später)
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

//Wow calculator "Oldschool Baby"
console.clear;
const calculatorDisplay = document.querySelector(
  "[data-js=calculator-display]"
);
let calculateThis = "";
let operator = "";
const wowForm = document.querySelector("[data-js=wow-form]");
const oneButton = document.querySelector("[data-js='1-button']");
const twoButton = document.querySelector("[data-js='two-button']");
const threeButton = document.querySelector("[data-js='three-button']");
const zeroButton = document.querySelector("[data-js='zero-button']");
const pointButton = document.querySelector("[data-js='point-button']");

const plusButton = document.querySelector("[data-js=plus-button]");
const minusButton = document.querySelector("[data-js=minus-button]");
const deleteButton = document.querySelector("[data-js='delete-button']");
const equalsButton = document.querySelector("[data-js='equals-button']");

const errorDisplay4 = document.querySelector("[data-js=error-display4]");

oneButton.addEventListener("click", (event) => {
  calculateThis += "1";
  calculatorDisplay.textContent = calculateThis;
});
twoButton.addEventListener("click", (event) => {
  calculateThis += "2";
  calculatorDisplay.textContent = calculateThis;
});
threeButton.addEventListener("click", (event) => {
  calculateThis += "3";
  calculatorDisplay.textContent = calculateThis;
});

zeroButton.addEventListener("click", (event) => {
  calculateThis += "0";
  calculatorDisplay.textContent = calculateThis;
});

pointButton.addEventListener("click", (event) => {
  calculateThis += ".";
  calculatorDisplay.textContent = calculateThis;
  const integer = calculateThis.split(".")[0];
  console.log(integer);
});
plusButton.addEventListener("click", (event) => {
  let operator = "+";
  calculateThis += "+";
  calculatorDisplay.textContent += "+";
});
minusButton.addEventListener("click", (event) => {
  let operator = "-";
  calculateThis += "-";
  calculatorDisplay.textContent = calculateThis;
});

deleteButton.addEventListener("click", (event) => {
  let calculateThis = "0";
  calculatorDisplay.textContent = calculateThis;
  errorDisplay4.textContent = "Does not really delete as it should yet";
});

equalsButton.addEventListener("click", (event) => {
  const test = calculateThis.split("+")[0];
  // console.log(test);
});

// attacking the fraction problem

// const fraction = calculateThis.split(".")[1];

function getIntegerString(a) {
  if (a.includes(".")) {
    return a.split(".")[0];
  }
  return a;
}
function getFractionString(a) {
  if (a.includes(".")) {
    return a.split(".")[1];
  }
  return 0;
}

function getInteger(a) {
  if (a.includes(".")) {
    return Number(a.split(".")[0]);
  }
  return Number(a);
}
function getFraction(a) {
  if (a.includes(".")) {
    return Number(a.split(".")[1]);
  }
  return 0;
}

const testV = "18.79";
/* console.log(getInteger(testV));
console.log(getFraction(testV)); */

function addFractions(a, b) {
  const aDecimalPlaces = Number(`${getFraction(a)}`.length);
  const bDecimalPlaces = Number(`${getFraction(b)}`.length);
  console.log(aDecimalPlaces, bDecimalPlaces);
  let integerSum = addition(getInteger(a), getInteger(b));
  const fractionTest = addition(getFraction(a), getFraction(b));
  if (aDecimalPlaces > bDecimalPlaces) {
    console.log("a hat mehr Stellen als b");
  } else if (aDecimalPlaces < bDecimalPlaces) {
    console.log("b hat mehr Stellen als a");
  } else {
    console.log("a und b haben gleich viele Nachkommastellen");
  }
  if (fractionTest < 10) {
    return Number(integerSum + "." + fractionTest);
  }
  /* const fractionToAdd = Number(`${fractionTest}`.substring(0, 1)); */
  // console.log(fractionToAdd);
  return integerSum + 1 + "." + `${fractionTest}`.substring(1, 2);
  errorDisplay4.textContent = "Does not compute correct";
}
const x = "9.3856";
const y = "2.97";
const z = "1.1";
const d = "1.2";
console.log(addFractions(y, x));
console.log(addFractions(z, d));

/* const testString = "Hallo";
console.log(testString.substring(0, 1)); */
