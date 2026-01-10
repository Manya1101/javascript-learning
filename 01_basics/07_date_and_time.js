//DATES : its an object in js 

let myDate = new Date();
console.log(myDate); // the o/p here is not very readable 

console.log(myDate.toString()); // Fri Jan 09 2026 09:58:15
console.log(myDate.toLocaleString()); //9/1/2026 ...
console.log(typeof myDate); //object 

let myCreateDate = new Date(2026,0,23,5,2);
console.log(myCreateDate.toLocaleString()); //23/1/2026, 5:02:00 am
let mynewDate = new Date(2026,0,1);
console.log(mynewDate.toDateString()); //Thu Jan 01 2026

//----TIMESTAMPS IN JS--------

let myTimeStamp = Date.now(); // Date.now() gives current timestamp in milliseconds
console.log(myTimeStamp); // gives time in millisec
console.log(myTimeStamp /1000); // in seconds but decimal val too
console.log(Math.floor(myTimeStamp/1000)); // remove decimal

console.log(mynewDate.getTime()); // milliseconds for Jan 1, 2025
