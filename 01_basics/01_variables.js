const accId = 12345;
/*
  value can't be changed
  cant be redeclared 
  works inside block
  but for objectd , array may be changed 
  eg : const arr = [1,2]
       arr.push(3); //here array will be changed
*/

let accName = "Manya";
/*
  Used nowadays
  Can be changed
  Cannot be redeclared in the same block
  Works only inside the block {}
   let y = 10;
   y = 20;     // allowed
   let y = 30; // ❌ error
*/

var acc = "123";
/*
  Used before 2015
  Can be changed and redeclared
  Works everywhere in the function (can cause bug)
  var x = 10;
  var x = 20; // allowed
  x = 30;     // allowed
*/

console.log(accId);
console.log(acc);
console.log(accName);
//to create a table 
console.table([accId,acc,accName]);
