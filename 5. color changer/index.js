const text = document.querySelector("#text");
const redCol = document.querySelector("#red-col");
const greenCol = document.querySelector("#green-col");
const blueCol = document.querySelector("#blue-col");

redCol.addEventListener("click", ()=>{
    text.style.color = "red";
})

greenCol.addEventListener("click", ()=>{
    text.style.color = "green";
})

blueCol.addEventListener("click", ()=>{
    text.style.color = "blue";
})