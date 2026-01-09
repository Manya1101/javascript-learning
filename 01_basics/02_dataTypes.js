"use strict" // treat all JS code as newer version

/*alert("Hello")
   or
alert(3+3)
   alert works only in browser , not in Node.js
   not used in real project
*/

// Javascript has 8 types of datatypes 
// 7 primitive and 1 non primitive 

/* Primitive types 

    NUMBER => eg: let age = 21;
                  let price = 99.5;

    String => For text (written in quotes)

    Boolean =>true / false 
    eg : let isStudent = true;

    Undefined =>Variable declared but no value given
    eg: let x;

    Null => Value is intentionally empty
    eg : let x = null;

    BigInt => For very large no.

    Symbol => For unique values
    let id = Symbol("id");
*/
/* Non-Primitive (Reference) Datatype
   Object =>Stores multiple values
   eg: let user = {
    name: "Manya",
    age: 21
   };
*/

console.log(typeof "manya");
//typeof is used to tell the datatype like above
//more such eg:
let age =21; 
console.log(typeof age);

//Important for interviews 
console.log(typeof null); // its give o/p -> object (which is considerd error or thats how JS works )
console.log(typeof undefined); //it gives o/p -> undefined (which is true kinda )

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (memory for Primitive datatype) and Heap (for non primitive datatype)
 
//Stack Memory ; it stores value directly 

let myname = "ManyaAgg";
let nickname = "Maniee";

console.log(myname);
console.log(nickname);

//if we change the nickname val
nickname = "Anie";
console.log(myname); //the myname val , i.e the origional val wont change 
console.log(nickname); // only the new val will change as the value earleir was copied for this 

//Heap : Stores reference (Address) to data , dynamic memo

let userone ={
    firstname : "Manya",
    sirname : "Aggarwal"
};
let usertwo = userone;

console.log(userone);
console.log(usertwo);

//if we change
usertwo.firstname = "Manie";
console.log(userone); //so here both the object values will changes
console.log(usertwo); // as they are both poinitng to same memory





