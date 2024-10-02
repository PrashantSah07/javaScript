// let arr=[12,23,34,42,55,null,false,"not defined"];  
// console.log(arr);

// for(let a in arr){ 
//     console.log("Index "+a+" is in value: ",arr[a]);
// } 

// console.log();

// for(let a of arr){ 
//     console.log(a);
// } 

// console.log();

// for(let a=0; a<=arr.length-1; a++){ 
//     console.log(arr[a]);
// } 




// let arr=[[11,12],[21,22]];                                           // array- [2][2];

// for(let a=0; a<=arr.length-1; a++){ 
//     for(let b=0; b<=arr[a].length-1; b++){
//         console.log(arr[a][b]); 
//     }
// }

// console.log();

// for(let a in arr){ 
//     console.log(arr[a])
// } 

// console.log();

// for(let a of arr){ 
//     console.log(a)
// }

// console.log(); 

// console.log(arr) 




// let arr1 = [[[11, 12], [13,14]], [[15,16], [17, 18]]];                    // array- [2][2][2];
// for (let a = 0; a <= arr1.length - 1; a++) {
//     for (let b = 0; b <= arr1[a].length - 1; b++) {
//         for (let c = 0; c <= arr1[a][b].length - 1; c++) {
//             console.log(arr1[a][b][c]);
//         }
//     }

// }

// console.log();

// for (let a in arr1) {
//     console.log(arr1[a]);
// }

// console.log();

// for (let a of arr1) {
//     console.log(a);
// }

// console.log(); 

// console.log(arr1);




// let arr2 = [[[11, 12], [21, 22], [31, 32]], [["prashant", "vishal"], ["kajal", "anchal"], ["ayush", "piyush"]], [['A', 'B'], ['C', 'D'], ['E', 'F']]];
// for (let a = 0; a <= arr2.length-1; a++) {                            // array- [2][3][3];
//     for(let b=0; b<=arr2[a].length-1; b++){ 
//         for(let c=0; c<=arr2[a][b].length-1; c++){
//             console.log(arr2[a][b][c]);
//     } 
// }
// }

// console.log();

// for (let a in arr2) {
//     console.log(arr2[a])
// }

// console.log();

// for (let a of arr2) {
//     console.log(a);
// }

// console.log();

// console.log(arr2);



// let arr=[24,52,5,12,54,3,5];            //---> forEach loop
// arr.forEach((Element)=>{ 
//     console.log(Element)

// })  



let max=0;
let arr = [342, 4, 3, 5, 6, 4, 61532, 715, 4, 721534, 15634, 7, 31547, 24, 37, 2154634, 6, 34, 346, 342515, 2, 6, 2236, 23, 76, 223334];

for(let a=0; a<arr.length; a++){ 
    console.log(arr[a]); 
    if(max<arr[a]){ 
        max=arr[a];
    }

} 
console.log("The maximum element in this array is: ",max);