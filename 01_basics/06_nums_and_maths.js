
let a = 10;       // integer
let b = 10.5;     // decimal
let c = -25;      // negative

// 2. Basic arithmetic operations
let x = 10;
let y = 3;

x + y;  // 13
x - y;  // 7
x * y;  // 30
x / y;  // 3.333...
x % y;  // 1  (remainder)
x ** y; // 1000 (power)

// 3. Increment & Decrement
let i = 5;
i++; // 6
i--; // 5

// 4. Special number values
Infinity;
-Infinity;
NaN; // Not a Number

// 5. NaN example
let n = "abc" / 2; // NaN

// 6. Type checking
typeof 10;   // "number"
typeof NaN;  // "number"

// =======================================
// MATH OBJECT
// =======================================

Math.PI;          // 3.141592653589793
Math.abs(-10);    // 10
Math.round(4.6);  // 5
Math.floor(4.9);  // 4
Math.ceil(4.1);   // 5
Math.sqrt(16);    // 4
Math.pow(2, 3);   // 8
Math.max(1, 5, 3); // 5
Math.min(1, 5, 3); // 1

// =======================================
// Math.random() (VERY IMPORTANT)
// =======================================

// Math.random() returns a random number
// Range: 0 (inclusive) to 1 (exclusive)

Math.random(); // example: 0.472893 (always < 1)

// 1. Random number between 0 and 9
Math.floor(Math.random() * 10);

// 2. Random number between 1 and 10
Math.floor(Math.random() * 10) + 1;

// 3. Random number between 1 and 100
Math.floor(Math.random() * 100) + 1;

// 4. Random number between min and max
let min = 5;
let max = 10;

Math.floor(Math.random() * (max - min + 1)) + min;

// Explanation:
// (max - min + 1) → range size
// Math.random()   → gives decimal
// Math.floor()    → removes decimal
// + min           → shifts range

// =======================================
// NUMBER METHODS
// =======================================

let num = 123.456;

num.toFixed(2);        // "123.46"
num.toString();        // "123"
Number("100");         // 100
parseInt("100px");     // 100
parseFloat("12.5px");  // 12.5

// Safe integer limits
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

// =======================================
// IMPORTANT NOTES
// =======================================
// • Math.random() NEVER gives 1
// • Always use Math.floor() to get whole numbers
// • For range: multiply, floor, then add min
