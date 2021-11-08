const inputText = document.querySelector("#text-input");
const redCol = document.querySelector("#red-col");
const greenCol = document.querySelector("#green-col");
const blueCol = document.querySelector("#blue-col");
const outputDiv = document.querySelector("#output");

redCol.addEventListener("click", () => {
    var textInput = inputText.value;
    outputDiv.textContent = textInput;
    outputDiv.style.color = "red";
});

greenCol.addEventListener("click", () => {
    var textInput = inputText.value;
    outputDiv.textContent = textInput;
    outputDiv.style.color = "green";
});

blueCol.addEventListener("click", () => {
    var textInput = inputText.value;
    outputDiv.textContent = textInput;
    outputDiv.style.color = "blue";
});
