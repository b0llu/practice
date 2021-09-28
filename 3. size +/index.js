var input= document.querySelector("#input")
var buttonPlus = document.querySelector("#button-plus")
var buttonMinus = document.querySelector("#button-minus")
var outputEl = document.querySelector("#output")


buttonPlus.addEventListener("click",function addtwo(){
    var inputData = input.value
    style = window.getComputedStyle(outputEl, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    outputEl.style.fontSize =(currentSize + 2) + 'px';
    outputEl.textContent= inputData

})

buttonMinus.addEventListener("click",function removetwo(){
    var inputData = input.value
    style = window.getComputedStyle(outputEl, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    outputEl.style.fontSize =(currentSize -2) + 'px';
    outputEl.textContent= inputData
})






// const text = document.querySelector("#text");
// const bigBtn = document.querySelector("#big-btn");
// const smallBtn = document.querySelector("#small-btn");
// const outputDiv = document.querySelector("#output");

// var number = 32;

// bigBtn.addEventListener('click', ()=>{
//     number += 2;
//     text.style.fontSize= `${number}px`;  
// });

// smallBtn.addEventListener('click', ()=>{
//     number -= 2;
//     text.style.fontSize= `${number}px`
// });