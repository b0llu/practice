const text = document.querySelector("#text");
const bigBtn = document.querySelector("#big-btn");
const smallBtn = document.querySelector("#small-btn");

var number = 32;

bigBtn.addEventListener('click', ()=>{
    number += 2;
    text.style.fontsize= `${number}px`
});

smallBtn.addEventListener('click', ()=>{
    number -= 2;
    text.style.fontsize= `${number}px`
});