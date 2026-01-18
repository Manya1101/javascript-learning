//Immediately Invoked Function Expression
// A function that runs immediately as soom as its defined 
//Its used because global scope ke pollution sE prblm hoti h so to avoid it we use IIFE


//syntax : ()() 
//it has two parenthesis , one for defination of function and second for execution

//eg: 
(function(){
    //unnamed IIFE
    console.log("I am IIFE");
})();

//named IIFE
(function code(){
    console.log("Iam named IIFE");
})();

//arrow function in IIFE
( ()=>{
    console.log("Arrow IIFE");
})();
 
//more ex for arrow function in IIFE , to pass value 
((name)=>{
    console.log(`I am IIFE ,${name}`);
})("Manya");


