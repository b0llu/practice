const check = document.querySelector("#check");

var Ram = {
    name: "Ram",
    age: 25,
    yuga: "Treta"
}

var Krishna = {
    name: "Krishna",
    age: 31,
    yuga: "Dwapar"
}

check.addEventListener ("click", function age () {
    if (Ram.age > Krishna.age) {
        console.log ("Ram");
    } else 
    console.log ("Krishna");
})