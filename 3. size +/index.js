// const text = document.querySelector("#text");
const inputText = document.querySelector("#input-text");
const bigBtn = document.querySelector("#big-btn");
const smallBtn = document.querySelector("#small-btn");
const outputDiv = document.querySelector("#output");

var number = 32;

function increace (text) {
    var plusTwo= document.createElement('plusTwo');
    plusTwo.appendChild(document.createTextNode(text));
      document.body.appendChild(plusTwo);

    number += 2;
    plusTwo.style.fontSize= `${number}px `;  
};

function toIncreace () {
    outputDiv.text = increace(inputText.value);
}
bigBtn.addEventListener("click", toIncreace)


function decrease (text) {
    var minusTwo= document.createElement('minusTwo');
    minusTwo.appendChild(document.createTextNode(text));
      document.body.appendChild(minusTwo);

    number -= 2;
    minusTwo.style.fontSize= `${number}px `;  
};

function toDecrease () {
    outputDiv.text = decrease(inputText.value);
}
smallBtn.addEventListener("click", toDecrease)
