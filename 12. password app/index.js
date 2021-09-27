const input = document.querySelector("#input");
const checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", ()=>{
    if (input.value.length < 10 || input.value.length > 10) {
        alert ("Minimum and Maximum length = 10");
    } else {
        alert ("correct")
    }

    if (input.value.length < 10 || input.value.length > 10) {
        input.style.backgroundColor = "red";
    } else 
    input.style.backgroundColor = "green"

})