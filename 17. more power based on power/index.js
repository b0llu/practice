const check = document.querySelector("#check");

var Ram = {
    name: "Ram",
    power: 2500,
    yuga: "Treta"
}

var Krishna = {
    name: "Krishna",
    power: 2325,
    yuga: "Dwapar"
}

check.addEventListener("click", ()=> {
    if ((Ram.power) + 35 > (Krishna.power) + 35) {
        console.log("Ram is more Powerfull");
    } else
    console.log("Krishna is more Powerfull");
})