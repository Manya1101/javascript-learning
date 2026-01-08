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
console.log(logging);