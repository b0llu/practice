let numOne = document.querySelector("#num1");
let numTwo = document.querySelector("#num2");
const addBtn = document.querySelector("#add-btn");
const subBtn = document.querySelector("#sub-btn");
const mulBtn = document.querySelector("#mul-btn");
const divBtn = document.querySelector("#div-btn");
let outputBox = document.querySelector("#output-box");

function addition(numOne, numTwo) {
    return Number(numOne) + Number(numTwo)
}
 
function subtraction(numOne, numTwo) {
    return Number(numOne) - Number(numTwo)
}

function multiplication(numOne, numTwo) {
    return Number(numOne) * Number(numTwo)
}

function division(numOne, numTwo) {
    return Number(numOne) / Number(numTwo)
}


addBtn.addEventListener("click", ()=>{
    outputBox.textContent = addition(numOne.value, numTwo.value);  
})

subBtn.addEventListener("click", ()=>{
    outputBox.textContent = subtraction(numOne.value, numTwo.value);  
})

mulBtn.addEventListener("click", ()=>{
    outputBox.textContent = multiplication(numOne.value, numTwo.value);  
})

divBtn.addEventListener("click", ()=>{
    outputBox.textContent = division(numOne.value, numTwo.value);  
})