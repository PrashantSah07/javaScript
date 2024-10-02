/* javaScript program to generate a random number from the computer. The program 
   then takes an input from the user to tell them whether the guess was correct 
   greater or lesser than the original number.

   100-(no of guesses) is the score of the user the program is expected to terminate 
   once the number is guessed right. Number should be between 1-100*/


const prompt = require("prompt-sync")();

let numberOfChances = 0;
let comp = Math.floor(Math.random() * 100);

let user=0;
while (comp != user) {
    user = prompt("Enter user input: ");

    if (comp == user) {
        console.log("Yes, you guessed it right!");
    }
    else if (comp < user) {
        console.log("Grater than computer input, try again!");
    }
    else if (comp > user) {
        console.log("Smaller than computer input, try again!")
    }
    numberOfChances += 1;
}
console.log("Computer input: ", comp);
console.log("The total number of chances: ", numberOfChances);

if (numberOfChances > 10) {
    console.log("You failed");
} else
    console.log("Congratulations champ!, you passed");


