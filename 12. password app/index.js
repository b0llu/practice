const input = document.querySelector("#input");
const button = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output");

button.disabled = true;
button.addEventListener('click', checkPassword);

function checkPassword() {
  let value = input.value;
    
  if (value.length < 10) {
    
    outputDiv.innerText = "error";
    input.style.border = " 1px solid red ";
  } else {
    
    outputDiv.innerText = "successful";
    input.style.border = " 1px solid green ";
  }
}

input.addEventListener('input', function() {
    let value = input.value;
    if (value.length < 10) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})