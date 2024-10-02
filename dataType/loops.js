                                                           //---> For loop   

const prompt = require("prompt-sync")();

// for( let a =1; a<=2000; a++){ 
//     console.log(a); 
// } 

// *** Program to add first n natural number  

// let n = prompt("Enter the value of n: ");
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     console.log(i+" +")
//     sum += i;
// }
// console.log("The total sum of first " + n + " natural number is: " + sum);


// *** Program to calculate factorial first n natural number  

// let n = prompt("Enter the value of n: ");
// let fac = 1;
// for (let i = 1; i <= n; i++) {
//     console.log(i+" *")
//     fac *= i;
// }
// console.log("The total factorial of first " + n + " natural number is: " + fac);


                                                   //---> For in loop 

// let obj={ 
//     prashant: 69, 
//     shivika: 63, 
//     krish: 37, 
//     shiv: 78, 
//     keshav: 53
// }               
// for(let a in obj){      
// console.log("Marks of "+a+" are: " +obj[a]);         
// }                       


                                                    //---> For of loop 

// for (let p of "Prashant"){ 
//     console.log(p)
// }                                                    


                                                    //---> While loop 

// let t=prompt("Enter the value of n: ");    
// t=Number.parseInt(t); 

// let a=1; 
// while(a<=t){ 
//     console.log(a);  
//     a++;
// }         

                                                    //---> Do while loop

// let k=prompt("Enter the value of n: ");    
// k=Number.parseInt(k); 

// let a=1;   
//     do{ 
//         console.log(a);  
//         ++a;
//     }while(a<=k);           
    
  

// let num = prompt("Please enter the  here: ");
// num = Number.parseInt(num);

// let sum = 0;

// let a=1;
// for (; a<=num; a++) {
//     if (a == 16) {
//         console.log("16~ Dear Prashant, Happy Birthday!")
//         continue;
//     }
//     if (a == 27) {
//         console.log("27~ Dear Prashant, it's you inrollment number i.e, 0191EE211027")
//         continue;
//     }
//     console.log(a);
//     sum = sum + a;
// }
// console.log("Thank you for exicuting the code and the value of total sum is: " + sum); 


let t=prompt("Enter table: "); 
let e=prompt("Enter table finish line: ");

for(let a=1; a<=e; a++){ 
    console.log(t+" x "+a+" = "+a*t);
} 
console.log("\nTable finished:)")