//Control flow 
/*
It means the order in which statements are executed in a program.
its means how JS decides what to run next
By default , J.S runs top ->bottom , but control flow lets you change that order.
*/

//Types 
//1.Conditional 
// if , if...else , else if ,switch
if (age >= 18) {
  console.log("Adult");
}
//switch
const day = 2;
switch(day){
   case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thrusday");
    break;
    default :
     console.log("Sunday");
     break;
}
