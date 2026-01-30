/*falsy values are : 
 false , 0 , -0, BigInt 0n , "", null ,undefined,Nan
*/
//except for these all are truthy val 
//but some truthy val which confuse are 
//"0","false"," "(it has space),[],{},function(){}

// to detect an empty array 
const arr = [];
if(arr.length === 0){
    console.log("its emtpty");
}
//to detect an empty object
const obj = {};
if(Object.keys(obj).length === 0){
    console.log("Its empty as well");
}

//Nullisg Coalescing Operator (??) : null undefined 
//syntax : xyz ?? abc;
// it returns right hand value only if left hand val is null or undefined 
let name = null;
let result = name ?? "Guest";
console.log(result); // "Guest"

//Terniary Operator 
//syntax  : conditon ? true : false

const age = 21;
age >= 18 ? console.log("Adult") : console.log("not adult");