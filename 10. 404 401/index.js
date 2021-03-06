const error401Btn = document.querySelector("#error1-btn");
const error404Btn = document.querySelector("#error4-btn");

var serverURL1 = "https://unitube-server.herokuapp.com/playlists/";
var serverURL2 = "https://jsonplaceholder.typicode.com/dummyUsers";

error401Btn.addEventListener("click", function error401() {
  fetch(serverURL1).then((response) => {
    if (response.status === 401) {
      alert("You Are Not Logged In");
    } else alert(":)");
  });
});

error404Btn.addEventListener("click", function error404() {
  fetch(serverURL2).then(function (response) {
    if (response.status === 404) {
      alert("Page Not Found");
    } else alert(":)");
  });
});
