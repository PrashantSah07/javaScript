console.log("Hey, this is simple way to print javaScript code");
console.warn("hey please don't drink soda");   // this is shows to the warn in the browser 
console.error("Hey, this is an error");  // this is shows as the red line error in the browser
console.info("Hey, this is an important information");   // this is used to indicate the important info in the browser.(similar to console.log)*
console.assert(4 > 5);     // in assert if condition is true than no problem else assertion will be failed
console.clear();   // this is used to clear the console in the browser 

const item = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5

}
console.table(item);   // this is show as a table form 


console.time("excutingTime");

for (let a = 1; a <= 100000; a++) {
    console.log(a);
}

console.timeEnd("excutingTime"); 
