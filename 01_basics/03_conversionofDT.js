let score = 12;
/* 
 to know the data type of the score 
*/
console.log(typeof score);
console.log(typeof(score));

//what if we want to convert this value into another datatype

let newval = String(score);
console.log(newval);
console.log(typeof(newval));

//and if the value cant be converted for eg

let num = "hitesh";
console.log(typeof(num));
let newnum = Number(num);
console.log(typeof(newnum));
console.log(newnum); // o/p => Nan,  so here , since its not possible we get the o/p Nan 

let thenum = Boolean(num); //for boolean conversion 
console.log(typeof(thenum));
console.log(thenum); 

// conversion of given val into boolean
let isloggedIn = 0;
let logging = Boolean(isloggedIn);
console.log(logging); //gives false o/p
 
//1 => true , 0=>false 
//"" => false (empty string)
//"manya" => true 
 
// -----------------------OPERATIONS------------------------------

let val = 2;
let neg  = -val;
console.log(neg); // o/p => -2

console.log("1" +2+2); // o/p => 122
console.log(1 + 2+ "2"); // o/p =>32 
//basically if string is first then everything is considered as string 
//if number is first then first summition happens and then string is attached 

//------------POSTFIX(x++) AND PREFIX(++x) INCREMENT----------------

let x = 5;
let y = x++; //use old value first, then increase
let a = 5;
let b = ++a; //increase first, then use value
/*   OUTPUT  : x = 6, y = 5;
               a = 6, b = 6;            
*/
