if(true){
    const a = 10;
    let b = 20;
    var c = 30;
}
// console.log(a); // O/P : a is not defined
// console.log(b); // O/P:  b is not defined
// console.log(c); //30 is the o/p

//GLOBAL SCOPE IN BROWSER CONSOLE IS DIFFRENT FROM GLOBAL SCOPE IN CODE ENVIROMENT THROUGH NODE IS DIFFRENT.

//{} = SCOPE 

function one(){
    const username = "manya"
    function two(){
        const web = "youtube";
        console.log(web);
        console.log(username);
    }
   // console.log(web);
    two();
}
one();

//Closure means:
//  👉 A function remembers the variables from where it was created, even after that place is finished.

