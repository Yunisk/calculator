const nums = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operation");
const AC = document.querySelector(".AC");
const equals = document.querySelector(".equals");
const screen = document.querySelector(".screen");

let num1 = "";
let num2 = "";
let currop = "";
let opSelected = false;
let resultComputed = false;

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    const value = e.target.value;
    if (resultComputed && !opSelected) {
      num1 = value;
      resultComputed = false;
    } else if (opSelected) {
      num2 += value;
      screen.innerText = num2;
    } else {
      num1 += value;
      screen.innerText = num1;
    }
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    const value = e.target.value;
    if (num1 === "") {
      currop = "";
    } else if (opSelected && !resultComputed) {
      num1 = String(compute(Number(num1), Number(num2), currop));
      num2 = "";
      currop = value;
      opSelected = true;
    } else {
      currop = value;
      opSelected = true;
      resultComputed = false;
    }
  });
});

equals.addEventListener("click", () => {
  num1 = String(compute(Number(num1), Number(num2), currop));
  num2 = "";
  opSelected = false;
  resultComputed = true;
});

const compute = (num1, num2, operation) => {
  let result;

  if (operation === "/") {
    result = divide(num1, num2);
  } else if (operation === "*") {
    result = multiply(num1, num2);
  } else if (operation === "-") {
    result = subtract(num1, num2);
  } else if (operation === "+") {
    result = add(num1, num2);
  }
  let roundedResult = Number(result.toFixed(2));
  screen.innerText = roundedResult;
  return roundedResult;
};

const divide = (num1, num2) => {
  if (num2 === 0) {
    reset();
    return "ERROR";
  }
  let result = num1 / num2;
  return result;
};

const multiply = (num1, num2) => {
  let result = num1 * num2;
  return result;
};

const subtract = (num1, num2) => {
  let result = num1 - num2;
  return result;
};

const add = (num1, num2) => {
  let result = num1 + num2;
  return result;
};

AC.addEventListener("click", () => {
  screen.innerText = "";
  num1 = "";
  num2 = "";
  opSelected = false;
});

const reset = () => {
  let num1 = "";
  let num2 = "";
  let currop = "";
  let opSelected = false;
  let resultComputed = false;
};
