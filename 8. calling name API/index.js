const inputText = document.querySelector("#input-text");
const nextBtn = document.querySelector("#next-btn");
const outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getURL(text){
    return serverURL + "?" + "text=" + text
}

nextBtn.addEventListener("click", function api () {
    var inputTxt = inputText.value;
    fetch(getURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var contentsText = json.contents.text;
        outputDiv.innerHTML = contentsText
    })
        
})