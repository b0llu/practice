const error401Btn = document.querySelector("#error1-btn");
const error404Btn = document.querySelector("#error4-btn");


var serverURL1 = "https://unitube-server.herokuapp.com/playlists/"
var serverURL2 = "https://jsonplaceholder.typicode.com/dummyUsers"


error401Btn.addEventListener("click", function error401 () {
    fetch(serverURL1)
    .then(function(response){
        if (response.status === 401) {
            console.log(json)
        }
    }) 
    .catch(function() {
        alert("You Are Not Logged In")
    } )
})

error404Btn.addEventListener("click", function error404 (){
    fetch(serverURL2)
    .then(function(response){
        if (response.status === 404) {
            console.log(json)
        }
    })
    .catch(function(){
        alert("Page Not Found")
    })
})
