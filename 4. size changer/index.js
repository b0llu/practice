const inputText = document.querySelector("#input-text");
const h1Btn = document.querySelector("#h1-btn");
const h2Btn = document.querySelector("#h2-btn");
const h3Btn = document.querySelector("#h3-btn");
const outputDiv = document.querySelector("#output");


function headOne(text) {
    let h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(text));
    document.body.appendChild(h1);
}
function toH1() {
    outputDiv.text = headOne(inputText.value);
}
h1Btn.addEventListener("click", toH1);

function headTwo(text) {
    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(text));
    document.body.appendChild(h2);
}
function toH2() {
    outputDiv.text = headTwo(inputText.value);
}
h2Btn.addEventListener("click", toH2);

function headThree(text) {
    let h3 = document.createElement("h3");
    h3.appendChild(document.createTextNode(text));
    document.body.appendChild(h3);
}
function toH3() {
    outputDiv.text = headThree(inputText.value);
}
h3Btn.addEventListener("click", toH3);





// h1Btn.addEventListener("click", ()=>{
//     let number = 32;
//     inputText.style.fontSize = `${number}px`
// })

// h2Btn.addEventListener("click", ()=>{
//     let number = 24;
//     inputText.style.fontSize = `${number}px`
// })

// h3Btn.addEventListener("click", ()=>{
//     let number = 20.8;
//     inputText.style.fontSize = `${number}px`
// })