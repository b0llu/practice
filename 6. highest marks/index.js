var readlineSync = require ('readline-sync');
var highestMarks= 0;

for (let i=0; i < 5; i++) {
var name = readlineSync.question("Enter your name! ");
var unitTest = readlineSync.question("Enter your unit test marks! ");
var preFinal = readlineSync.question("Enter your pre final marks! ");
var final = readlineSync.question("Enter your final marks! ");

var totalMarks = Number(unitTest)+Number(preFinal)+Number(final);
console.log(totalMarks);
}

if(totalMarks>highestMarks){
  highestMarks = totalMarks;
}
var average = Number(unitTest)+Number(preFinal)+Number(final)/300;
console.log("The average marks are: "+average); 


