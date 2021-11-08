
const text = document.querySelector("#text");
const hideBtn = document.querySelector('#hide-btn')
hideBtn.addEventListener('click',function toggleText(){
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  })
