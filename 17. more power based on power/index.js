const check = document.querySelector("#check");

var ram = {
  name: "ram",
  yuga: "treta",
  power: 2500,
};

var krishna = {
  name: "krishna",
  yuga: "dwarpa",
  power: 2325,
};

check.addEventListener("click", function () {
  var totalPower1 = ram.power + ram.name.length * 35;
  var totalPower2 = krishna.power + krishna.name.length * 35;

  if (totalPower1 > totalPower2) {
    console.log("ram is more powerfull");
  } else {
    console.log("krishna is more powerfull");
  }
});
