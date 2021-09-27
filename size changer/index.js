let inputText = document.querySelector("#input-text");
const h1Btn = document.querySelector("#h1-btn");
const h2Btn = document.querySelector("#h2-btn");
const h3Btn = document.querySelector("#h3-btn");
const outputBox = document.querySelector("#output");

let number = 32;

h1Btn.addEventListener("click", ()=>{
    
    inputText.style.fontSize = `${number}px`
})

h2Btn.addEventListener("click", ()=>{
    number -= 8;
    inputText.style.fontSize = `${number}px`
})

h3Btn.addEventListener("click", ()=>{
    number -= 11.2;
    inputText.style.fontSize = `${number}px`
})