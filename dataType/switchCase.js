const prompt = require("prompt-sync")();

let days = prompt("Enter days name as per code word");
//days=Number.parseInt(days);                              //---> days convert string("1","2"..."7") to number(1,2...7)
switch (days) {

    case "1":
        console.log("Today is sunday, Enjoy!");
        break;

    case "2":
        console.log("Today is monday");
        break;

    case "3":
        console.log("Today is tuesday");
        break;

    case "4":
        console.log("Today is wednesday");
        break;

    case "5":
        console.log("Today is thursday");
        break;

    case "6":
        console.log("Today is friday");
        break;

    case "7":
        console.log("Today is saturday");
        break;

    default:
        console.log("Please enter a valid day")
}

console.log("Thank you"); 