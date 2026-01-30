const companies = ["Google",'Amazon',"Microsoft"];
const startups = ["flipkart" ,"zomato","rippling"];

//push
//companies.push(startups) //bad practice as it enters array inside array as a whole individual quantity
console.log(companies); // [ 'Google','Amazon','Microsoft',[ 'flipkart', 'zomato', 'rippling' ]]

//concat
//merge 2 arrays by creating a new array 
//Does NOT change original arrays
const all_comp = companies.concat(startups)
console.log(all_comp);

//spread
//expand elements of an array into individual values 
//better than concat
//can be used for multiple arrays
let new_comp = [...companies,...startups];
console.log(new_comp);

//flat
//syntax : arr.flat(depth) where depth means upto which depth we need it to open up
//converts a nested array into single-level array
const new_arr = [1,2,3,[12,13,14],[123,1234,[12345,11,0]]];
console.log(new_arr);
const real_new = new_arr.flat(1);
const r_new = new_arr.flat(Infinity);
console.log(real_new);
console.log(r_new);

//isArray 
//syntax : Array.isArray(value);
let arr = [12,3,4];
let obj ={q:1,w:3};
console.log(Array.isArray(arr)); //true
console.log(Array.isArray(obj)); //false
//  convert into array 
console.log(Array.from("Manya")); //[ 'M', 'a', 'n', 'y', 'a' ]
console.log(Array.from({name : "manya"})); //[]
