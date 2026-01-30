//for loop
let n =5;
for(let i=0;i<n;i++){
   const ele = i;
  // console.log(ele);

}
//break and continue 

//++++++array specific loops++++++++++++

//for of loop
const arr = [11,25,23,4,5];
for (const num of arr) {
   console.log(num);
}
const greetings = "Hey";
for (const greet of greetings){
   console.log(greet);   
}

//++++++++++++ Map ++++++++
//its an object that holds key val pair 
//remembers the origional insertion order
//no duplicate value , unique values only

const mymap = new Map()
mymap.set('IN',"INDIA")
mymap.set('USA',"UNITED STATES")
mymap.set('FR','France');
console.log(mymap);

//for of loop on maps 
for (const country of mymap) {
   console.log(country);   // o/p in this form  : [ 'IN', 'INDIA' ]
}
//but by using this method 
for (const [code,cname] of mymap) {
   console.log(code,':',cname);
}

//objects cant be iterated by for of method