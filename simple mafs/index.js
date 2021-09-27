let numOne = document.querySelector("#num1");
let numTwo = document.querySelector("#num2");
const addBtn = document.querySelector("#add-btn");
const subBtn = document.querySelector("#sub-btn");
const mulBtn = document.querySelector("#mul-btn");
const divBtn = document.querySelector("#div-btn");
let outputBox = document.querySelector("#output-box");
 
addBtn.addEventListener("click", ()=>{
    let x = numOne.value;
    let y = numTwo.value;
    let z = Number(x) + Number(y);
    outputBox.textContent = z;  
})

subBtn.addEventListener("click", ()=>{
    let x = numOne.value;
    let y = numTwo.value;
    let z = Number(x) - Number(y);
    outputBox.textContent = z;  
})

mulBtn.addEventListener("click", ()=>{
    let x = numOne.value;
    let y = numTwo.value;
    let z = Number(x) * Number(y);
    outputBox.textContent = z;  
})

divBtn.addEventListener("click", ()=>{
    let x = numOne.value;
    let y = numTwo.value;
    let z = Number(x) / Number(y);
    outputBox.textContent = z;  
})