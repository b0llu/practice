

var student1 = {
  name: "a",
  unitTestMarks: 20,
  preFinalMarks: 50,
  finalMarks: 80,
  totalMarks: 150
}
var student2 = {
  name: "b",
  unitTestMarks: 19,
  preFinalMarks: 40,
  finalMarks: 90,
  totalMarks: 149
}
var student3 = {
  name: "c",
  unitTestMarks: 18,
  preFinalMarks: 60,
  finalMarks: 40,
  totalMarks: 118
}
var student4 = {
  name: "d",
  unitTestMarks: 17,
  preFinalMarks: 30,
  finalMarks: 60,
  totalMarks: 107
}
var student5 = {
  name: "e",
  unitTestMarks: 16,
  preFinalMarks: 70,
  finalMarks: 100,
  totalMarks: 186
}

console.log(student5.totalMarks)

console.log((student1.totalMarks + student2.totalMarks + student3.totalMarks + student4.totalMarks + student5.totalMarks) / 5)