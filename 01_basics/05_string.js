// ===============================
// STRINGS IN JAVASCRIPT
// ===============================

// String = sequence of characters (text)
// Written inside quotes

// 1. Ways to create strings
let a = "Hello";        // double quotes
let b = 'Hello';        // single quotes
let c = `Hello`;        // template literal (backticks)

// 2. Template literals
// Used for variable insertion and multiline strings
let name = "Manya";
let msg = `Hello ${name}`;

// 3. String length
let text = "JavaScript";
text.length; // 10

// 4. Strings are IMMUTABLE
// Original string cannot be changed
let str = "Hi";
str[0] = "B";
console.log(str); // "Hi"

// 5. Common string methods
let s = " JavaScript ";

s.toUpperCase();    // " JAVASCRIPT "
s.toLowerCase();    // " javascript "
s.trim();           // "JavaScript"
s.includes("Java"); // true
s.indexOf("S");     // 4
s.slice(0, 4);      // "Java"
s.replace('t','i');
// and many such methods , functions 

// 6. String concatenation
let x = "Hello";
let y = "World";
x + " " + y;         // "Hello World"

// 7. String vs Number
let p = "10";  // string
let q = 10;    // number

p + q; // "1010"
q + q; // 20

// 8. typeof string
typeof "Hello"; // "string"

// ===============================
// IMPORTANT NOTES
// ===============================
// • Strings are primitive data types
// • Stored in stack memory
// • Strings cannot be modified (immutable)
// • Use template literals for clean code
