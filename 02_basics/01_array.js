//Arrays 
/*
Array:
- Used to store multiple values in a single variable
- Dynamic size
- Can store mixed data types
- Arrays are objects ,Stored in Heap memory
- Index starts from 0
- push/pop are faster than shift/unshift
- slice() does NOT change original array
- splice() changes original array
- map/filter/reduce are MOST IMPORTANT for interviews
*/

// ================== 1. CREATE ARRAY ==================

let arr = [1,2,3,4];
let fruits = ["apple", "banana" ,"grapes"];
let mixed = [1, "hello",true,null,undefined];

// creating using constructor
let arr2 = new Array(10, 20, 30);  // (not preferred)
 
// ================== 2. ACCESS ELEMENTS ==================
console.log(arr[0]);

// ================== 3. ARRAY LENGTH ==================
console.log(arr.length); // o/p = 4

//Modify Elements
arr[1] = 23;
console.log(arr); // [1,23,3,4];

//Add Elements
arr.push(5);//add at end 
arr.unshift(0); // add at start 
console.log(arr);

//Remove Elements
arr.pop(); // remove from end
arr.shift(); // remove from start
console.log(arr);

//Searching Elements
arr.includes(9); //false 
arr.indexOf(3); // tells the index of given ele , if not present gives -1

//===================Join==================

let joinedarr = arr.join(); //converts into string & bind the arr
console.log(joinedarr);
console.log(arr);
console.log(typeof(joinedarr)); //string 


// ================== 9. SLICE vs SPLICE ==================

/*
slice(start, end)
- does NOT change original array
- end index not included
*/
console.log("A",arr);

let slicedArr = arr.slice(1, 3);
console.log("B",arr);
console.log(slicedArr);

/*
splice(start, deleteCount, addItems)
- changes original array
*/

let splicedArr = arr.splice(1,3);
console.log("C",arr);
console.log(splicedArr);

// ================== 10. LOOPING ==================

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach
arr.forEach((value, index) => {
  console.log(index, value);
});