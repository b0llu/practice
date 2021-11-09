var readlineSync = require("readline-sync");
var news = readlineSync.question("Tell me the news \n");
var newsSource = readlineSync.question("where did you get the news? \n");

if (newsSource === "whatsapp" || newsSource === "facebook") {
  console.log("Fake News");
} else {
  console.log("Correct news");
}
