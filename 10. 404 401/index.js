const error401Btn = document.querySelector("#error1-btn");
const error404Btn = document.querySelector("#error4-btn");


var serverURL1 = "https://unitube-server.herokuapp.com/playlists"
var serverURL2 = "https://jsonplaceholder.typicode.com/dummyUsers"

function getURL1(message) {
    return serverURL1 + "?" + "text=" + message
}

error401Btn.addEventListener("click", function error401 () {
    var inputError = "You Are Not Logged In"
    fetch(getURL1(inputError))
    .then(response => response.json())
    .then(json => {
        var errorMsg1 = json.message;
        alert(errorMsg1)
    })
        
})

function getURL2(text) {
    return serverURL2 + "?" + "text=" + text 
}

error404Btn.addEventListener("click", function error404 () {
    var inputError = "Page Not Found"
    fetch(getURL2(inputError))
    .then(response => response.json())
    .then(json => {
        alert(json)
    })
        
})