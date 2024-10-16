/* Gissningslek! Skriv in ett tal mellan 1 och 100,

=> om det är samma som det hemliga talet => Skriv ut "Grattis!"
=> om talet är större eller minde 10 ifrån talet => Skriv ut "Close but no cigar!"
=> ananrs => Skriv ut "Not even close" */

const secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = prompt("Gissa ett tal mellan 1 och 100");

if (guess == secretNumber) {
  console.log("Grattis!");
} else if (guess >= secretNumber - 10 && guess <= secretNumber + 10) {
  console.log("Close but no cigar!");
}
else {
  console.log("Not even close");
}