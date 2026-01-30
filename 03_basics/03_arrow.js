//this : it means who is calling the fn
//this refers to the object that is currently calling the function and is used to access that object’s data.
const user = {
    name : "manya",
    price : "999",
    welcomeMsg : function(){
        console.log(`hello ! ${this.name}`); //here this means user 
        console.log(this);
    }
}
user.welcomeMsg()
user.name = "Maniee"
user.welcomeMsg()
console.log(this) // o/p : {} in code enviroment 

// o/p of this in browser is window 
//o/p of this in strict mode is undefined 

//why this ? 
//we use this bcz it helps to write methods inside object 
//we can reuse code and need not to write again & again
//we can avoid har coding object names 

//when not to use this ?
//inside arrow fns as object method 
//when simple variables are enough

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//----------------------------------ARROW FUNCTION---------------------------------------------
//Its a  shorter way to write a function in J.S

//normal function 
function add(a,b){
   // return a+b;
}
 console.log(add(2,3)); 

//arrow function (normal) ; explicit return
const addtwo = (nums1,nums2) =>{
    return num1+nums2;
}
console.log(addtwo(2,3));

//arrow function (implicit return) : means where nno need to write return 
const adder = (a ,b) => a+b;

// if {} is written then we need to write return 
// but if curly braces are not present then we need not to write return 

//Returning Objects
const getUser = () => ({  //You must wrap the object in parentheses.
  name: "Manya", 
  role: "Developer" 
});


//------------Arrow Functions & this-----------------

//Normal function → has its own this
// Arrow function → does NOT have its own this
// It takes this from the surrounding scope (lexical this).
//Rule:
//Never use arrow functions as object methods if you need this.
//basically arrow function ko object ke andar mt use kro agar this use krna h toh 
