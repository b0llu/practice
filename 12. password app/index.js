const input = document.querySelector("#input");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output");

checkBtn.addEventListener("click", ()=>{
    if (input.value.length < 10 || input.value.length > 10) {
        outputDiv.innerHTML = "Minimum and Maximum length for the password is 10";
    } else {
        outputDiv.innerHTML = "You Logged In!"
    }

    if (input.value.length < 10 || input.value.length > 10) {
        input.style.backgroundColor = "red";
    } else 
    input.style.backgroundColor = "green"

})