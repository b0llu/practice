var text = document.querySelector("#text");
var buttonPlus = document.querySelector("#button-plus");
var buttonMinus = document.querySelector("#button-minus");

buttonPlus.addEventListener("click", plus);
buttonMinus.addEventListener("click", minus);

let defaultText = 16;

function plus() {
  defaultText = defaultText + 2;
  text.style.fontSize = `${defaultText}px`;
}

function minus() {
  defaultText = defaultText - 2;
  text.style.fontSize = `${defaultText}px`;
}

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
