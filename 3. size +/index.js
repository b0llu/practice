// const text = document.querySelector("#text");
const inputText = document.querySelector("#input-text");
const bigBtn = document.querySelector("#big-btn");
const smallBtn = document.querySelector("#small-btn");
const outputDiv = document.querySelector("#output");

var number = 32;

bigBtn.addEventListener('click', ()=>{
    number += 2;
    text.style.fontSize= `${number}px`;  
});

smallBtn.addEventListener('click', ()=>{
    number -= 2;
    text.style.fontSize= `${number}px`
});