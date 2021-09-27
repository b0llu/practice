let inputText = document.querySelector("#input-text");
const h1Btn = document.querySelector("#h1-btn");
const h2Btn = document.querySelector("#h2-btn");
const h3Btn = document.querySelector("#h3-btn");

h1Btn.addEventListener("click", ()=>{
    let number = 32;
    inputText.style.fontSize = `${number}px`
})

h2Btn.addEventListener("click", ()=>{
    let number = 24;
    inputText.style.fontSize = `${number}px`
})

h3Btn.addEventListener("click", ()=>{
    let number = 20.8;
    inputText.style.fontSize = `${number}px`
})