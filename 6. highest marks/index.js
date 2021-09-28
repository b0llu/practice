const readlineSync = require ('readline-sync');
var highestMarks= 0;

const name = readlineSync.question("Enter your name! ");
const unitTest = readlineSync.question("Enter your unit test marks! ");
const preFinal = readlineSync.question("Enter your pre final marks! ");
const final = readlineSync.question("Enter your final marks! ");

const totalMarks = Number(unitTest)+Number(preFinal)+Number(final);
console.log(totalMarks);

if(totalMarks>highestMarks){
  highestMarks = totalMarks;
}
const average = Number(unitTest)+Number(preFinal)+Number(final)/300;
console.log("The average marks are: "+average); 


