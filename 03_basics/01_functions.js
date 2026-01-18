 function myName(){
    console.log("M");
    console.log("Manya")
 }
 myName();

 function addnum(num1,num2){ //parameters: variable written in function defination
    console.log(num1 + num2);
 }
 addnum(2,3); //arguments : actual val passed when calling the function

 const res = addnum(4,4);
console.log(res); // o/p : undefined bcz the function is not returning
//  console.log() → just prints and return → gives value back

function sumnum(n1,n2){
    return n1+n2;
}
console.log(sumnum(1,1));