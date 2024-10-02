let num = [1, 2, 3, 4, 5]; 

// let a = num.toString();              //---> Convert array object to string
// console.log(a);

// let b = num.join("-");               //---> You can join anthing in an array like -,_,"",~ etc. 
// console.log(b);                  

// num.pop();                              //---> Pop removed the last array element
// console.log(num);  

// let c=num.pop();                                    //---> Pop removed the last array element and returend that element
// console.log("Returned the popped element: ",c);  

// let d=num.push(77);                     //---> Push returns the new array length and add the last new array element i.e. [ 1, 2, 3, 4, 5, 77]
// console.log("Total array length: ",d);  
// console.log(num); 

// let e = num.shift();                             //---> Shift removed the first array element 
// console.log("Removed the first element: ",e);                     

// let f=num.unshift(99);                    //---> Unshift returns the new array length and add the first new array element i.e. [ 99, 1, 2, 3, 4, 5]
// console.log("Total array length: ",f);
// console.log(num); 



let str="Prashant"; 

let a=Array.from(str);          //---> Array.from method is used for convert string to array
console.log(a); 