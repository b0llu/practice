const checkBtn = document.querySelector("#check-btn");

var serverURL = "https://unitube-server.herokuapp.com/playlists";

checkBtn.addEventListener("click", function errorMsg() {
  fetch(serverURL)
  .then((response) => {
    if (response.status === 401) {
      return alert(response.statusText);
    }
  });
});
