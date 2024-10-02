const prompt = require("prompt-sync")();

let str = prompt("What's in your mind? ");
console.log("Hello, "+str+"\nhave a nice day!\n"); 

let a = str.length;                                      //---> name.length;
console.log("total length of string~ " + a);
let b = str.toLowerCase();                               //---> name.toLowerCase(); 
console.log("toLowerCase~ " + b);
let c = str.toUpperCase();                               //---> name.toUpperCase(); 
console.log("toUpperCase~ " + c);
let d = str.trim();                                      //---> name.trim();
console.log("trim~ " + d);
let e = str.trimEnd();
console.log("trimEnd~ " + e);
let f = str.trimStart();
console.log("trimStart~ " + f);
let g = str.substring(4);                                //---> name.substring/slice;
console.log("substring~ " + g);
let h = str.substring(4, 9);
console.log("substring~ " + h);
let i = str.replace("t", "r");                           //---> name.replace(); 
console.log("replace~ " + i);
let j = str.charAt(5);                                   //---> name.charAt();
console.log("chatAt~ " + j);
let k = str.startsWith("Pra");                           //---> name.startsWith();
console.log("startWith~ " + k);
let l = str.endsWith("ah");                              //---> name.endsWith();
console.log("endsWith~ " + l);
let m = str.indexOf("s");                                //---> name.indexOf();
console.log("indexOf~ " + m); 
let n = str.indexOf("s",8);                                
console.log("indexOf~ " + n); 
let o = str.lastIndexOf("s");                            //---> name.lastIndexOf();
console.log("lastIndexOf~ " + o);
let p = str.lastIndexOf("s",8);                            
console.log("lastIndexOf~ " + p);
let q = str.includes("Prashant");                        //---> name.includes();
console.log("includes~ " + q);
let r = str.match("ah");                                 //---> name.match();
console.log("match~ " + r);                           


let name="Prashant"; 

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]); 

