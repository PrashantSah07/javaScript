// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// delete array[0];
// console.log(array);
// console.log(array.length);                      //---> Does'nt effect the array's length using delete method 



// let num=[1,2,3,4,5,6,7,8]; 
// let num2=[11,12,13,14,15,16,17,18];  
// let num3=[21,22,23,24,25,26,27,28];  

// let newArray=num.concat(num2,num3);            //---> concat method use for add the array elements
// console.log(newArray);



//  let array = [2,1,34,7,4,3,5,8,56,9]; 
//  array.sort();                                 //---> sort method used for print the array's element in ascending order
//  console.log(array); 



// function compare(a, b) {
//     return a - b;
// }
// let array = [2, 1, 34, 7, 4, 43, 5, 8, 56, 9];
// array.sort(compare);                                    //---> sort(compare) method is used for print the array's element in ascending order using function
// console.log(array); 



// function compare(a, b) {
//     return b - a;
// }
// let array = [2, 1, 34, 7, 4, 43, 5, 8, 56, 9];
// array.sort(compare);                                    //---> sort(compare) method is used for print the array's element in descending order using function
// console.log(array); 



// let a = [2, 1, 34, 7, 4, 43, 5, 8, 6, 56, 9];
// a.sort();
// console.log(a)
// a.reverse();                                     //---> reverse method is used for reverse the order of array's element
// console.log(a) 



// let a = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// console.log(a);
// let deletedValues=a.splice(2, 3, 1021, 1022, 1023, 1024);   //---> splice method is used to delete the array's element and returned the deleted values
// console.log(a); 
// console.log(deletedValues); 



let arr = [1, 22, 3, 14, 5, 6, 7, 8, 29];

let newArr = arr.slice(3);                       //---> slice(a) method is used to slice the array's element in anywhere
console.log(newArr);

let newArr2 = arr.slice(3, 5);                   //---> slice(a,b) method is used to slice the array's element in between a & b
console.log(newArr2); 