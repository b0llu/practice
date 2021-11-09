const check = document.querySelector("#check");

var ram = {
  name: "Ram",
  power: 2500,
  yuga: "Treta",
};

var krishna = {
  name: "Krishna",
  power: 2325,
  yuga: "Dwapar",
};

check.addEventListener("click", () => {
  if (ram.power > krishna.power) {
    console.log("Ram is more Powerfull");
  } else console.log("Krishna is more Powerfull");
});
