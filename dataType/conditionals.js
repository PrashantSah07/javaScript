const prompt = require("prompt-sync")();

// let name = prompt("Please enter your name?");
// console.log("Hello, " + name + "!");
// console.log(typeof name); 

let age = prompt("Please enter your age?");
console.log("Your age is: " + age);
age = Number.parseInt(age);
console.log(typeof age);                    //---> Converting the string to a number 

// if(age>=18){ 
//     console.log("Yes, you can drive the car")
// }else { 
//     console.log("No, you cannot drive the car until you become over 18")
// }  

// if (age <= 0 || age >= 101) {
//     console.log("Please enter a valid age");
// } else if (age > 0 && age <= 10) {
//     console.log("You are a kid and you cannot even think you driving");
// } else if (age >= 11 && age < 18) {
//     console.log("you are a kid and you think of driving over 18");
// } else if (age >= 18) {
//     console.log("Now you can drive as you are over 18");
// } 
//     console.log("Thank you");
 
//     console.log("you can "+(age<18? "not drive ": "drive"));    //---> Ternary operator 




console.log("Your 12th result:\n")

let phy = prompt("Enter physics marks: ");
phy = Number.parseInt(phy);

let che = prompt("Enter chemistry marks: ");
che = Number.parseInt(che);

let math = prompt("Enter math marks: ");
math = Number.parseInt(math);

let eng = prompt("Enter english marks: ");
eng = Number.parseInt(eng);

let hin = prompt("Enter hindi marks: ");
hin = Number.parseInt(hin);

let per = (phy + che + math + eng + hin) * 100 / 500;
if (phy >= 30 && che >= 30 && math >= 30 && eng >= 30 && hin >= 30 && per >= 30) {
    console.log("Congratulations, you are pass!");
} else
    console.log("You are fail!");

console.log("Your total percentage is: " + per + "%");
if (per >= 60) {
    console.log("First Division");
} else if (per >= 45) {
    console.log("Second Division");

} else if (per >= 30) {
    console.log("Third Division");
}
