var readlineSync = require('readline-sync');

var data = [
  {
  name: "",
  unittest: "",
  prefinal: "",
  final: ""
  },{
  name: "",
  unittest: "",
  prefinal: "",
  final: ""
  },{
  name: "",
  unittest: "",
  prefinal: "",
  final: ""
  },{
  name: "",
  unittest: "",
  prefinal: "",
  final: ""
  },{
  name: "",
  unittest: "",
  prefinal: "",
  final: ""
  },{
  name: "",
  unittest: "",
  prefinal: "",
  final: ""
  }
]

var arrayOfMarks = []
var sumOfMarks = []

sum = 0
for (i = 1; i < 6; i++) {
  console.log(`student ${i}`)
  var name = readlineSync.question("Enter Your Name = ")
  data[i].name = name

  var unittest = readlineSync.question("Enter Unit Test Marks = ")
  data[i].unittest = unittest
  var unitMarks = Number(unittest)

  var prefinal = readlineSync.question("Enter Pre Final Marks = ")
  data[i].prefinal = prefinal
  var preFinalMarks = Number(prefinal)

  var final = readlineSync.question("Enter Final Marks = ")
  data[i].final = final
  var finalMarks = Number(final)

  arrayOfMarks.push(data[i].final)

  var sum = unitMarks + preFinalMarks + finalMarks

  sumOfMarks.push(sum) 
}

console.log(`Highest Marks Are ${Math.max(...arrayOfMarks)}`)

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(`Average of 5 Students is ${sumOfMarks.reduce(reducer) / 5}`)
