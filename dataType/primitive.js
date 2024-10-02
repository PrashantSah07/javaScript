let a = null;                              //----> Null
let b = 34;                                //----> Number
let c = true;                              //----> Boolean
let d = BigInt("453") + BigInt("463");     //----> Bigint
let e = "Prashant";                        //----> String
let f = Symbol("I am a nice symbol");      //----> Symbol
let g = undefined;                         //----> Undefined 

console.log(a, b, c, d, e, f, g); 
console.log(typeof c);

                                              // Non-primitive (OBJECTS)

const item= { 
    "Prashant": true,
    "Vishal": false,
    "Rohan": 69, 
    "Krish": undefined
} 
    console.log(item["Prashant"]); 
    console.log(item.Prashant);  
    
    for(let a in item){ 
        console.log(a, item[a])
    }  

    // OR

    console.table(item);
