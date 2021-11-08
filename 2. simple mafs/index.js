let numOne = document.querySelector("#num1");
let numTwo = document.querySelector("#num2");
const addBtn = document.querySelector("#add-btn");
const subBtn = document.querySelector("#sub-btn");
const mulBtn = document.querySelector("#mul-btn");
const divBtn = document.querySelector("#div-btn");
let outputBox = document.querySelector("#output-box");

addBtn.addEventListener("click", addition);
subBtn.addEventListener("click", subtraction);
mulBtn.addEventListener("click", multiplication);
divBtn.addEventListener("click", division);

function addition(value1, value2) {
  var value1 = Number(numOne.value);
  var value2 = Number(numTwo.value);

  let sum = value1 + value2;
  outputBox.innerHTML = sum;
}

function subtraction(value1, value2) {
  var value1 = Number(numOne.value);
  var value2 = Number(numTwo.value);

  let sub = value1 - value2;
  outputBox.innerHTML = sub;
}

function multiplication(value1, value2) {
  var value1 = Number(numOne.value);
  var value2 = Number(numTwo.value);

  let mul = value1 * value2;
  outputBox.innerHTML = mul;
}

function division(value1, value2) {
  var value1 = Number(numOne.value);
  var value2 = Number(numTwo.value);

  let div = value1 / value2;
  outputBox.innerHTML = div;
}
