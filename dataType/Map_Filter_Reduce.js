// let arr=[24,52,5,12,54,3,5];           
// let a=arr.map((value)=>{ 
//     console.log(value) 
//     return value+1;
// }) 

//     console.log(a) 



//     let arr=[24,52,5,12,54,3,5];           
// let a=arr.map((value,index)=>{ 
//     console.log(value,index) 
//     return value+1;
// }) 

//     console.log(a) 



// let arr=[24,52,5,12];           
// let a=arr.map((value,index,array)=>{ 
//     console.log(value,index,array) 
//     return value+1;
// }) 

//     console.log(a) 




// Filter Method 


// let arr1 = [24, 52, 5, 12, 43, 63, 32, 2, 8, 7, 9, 0, 55, 23];
// let a = arr1.filter((element) => {
//     //console.log(element);
//     return element <= 10;
// })
// console.log(a); 



//---> Reduce Method 


// let arr2 = [1, 2, 3, 5, 2, 1];
// let newArr2 = arr2.reduce((a1, b1) => {
//     return a1 + b1;
// })
// console.log(newArr2); 



let arr2 = [1, 2, 3, 5, 2, 1];

let newArr2 = arr2.reduce((a1, b1, c1) => {
    return a1 + b1 + c1;
})
console.log(newArr2);