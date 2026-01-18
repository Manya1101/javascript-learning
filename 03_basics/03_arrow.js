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

// o/p og this in browser is window 
//o/p of this in strict mode is undefined 

//why this ? 
//we use this bcz it helps to write methods inside object 
//we can reuse code and need not to write again & again
//we can avoid har coding object names 

//when not to use this ?
//inside arrow fns as object method 
//when simple variables are enough

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//----------------------------------ARROW FUNCTION---------------------------------------------

//Its a  shorter way to write a function in J.S

//normal function 
function add(a,b){
    console.log(a+b);
   // return a+b;
}
//arrow function
const adder = (a ,b) => a+b;

add(5,6);
