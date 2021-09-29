const error401Btn = document.querySelector("#error1-btn");
const error404Btn = document.querySelector("#error4-btn");
const errorMsg = document.querySelector("#error-msg")

var serverURL1 = "https://unitube-server.herokuapp.com/playlists"
var serverURL2 = "https://jsonplaceholder.typicode.com/dummyUsers"

function getURL (text) {
    return serverURL1 + "?" + "text=" + text
}

error401Btn.addEventListener("click", function error401 () {
    var inputError = errorMsg.value
    fetch(getURL(inputError))
    .then(response => response.json())
    .then(json => {
        var errorMsg = json.message;
        alert(errorMsg)
    })
        
})