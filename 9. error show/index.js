const checkBtn = document.querySelector("#check-btn");

var serverURL = "https://unitube-server.herokuapp.com/playlists"



checkBtn.addEventListener('click', function errorMsg(){
    fetch(serverURL)
    .then(response => response.json())
    .then(json => {
        var errorOutput = json.message;
        alert (errorOutput)
    })
})