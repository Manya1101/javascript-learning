 // JAVASCRIPT EXECUTION CONTEXT
//Javascript is a synchronous single threaded language , i.e , code is executed line
//by line .
 /*
Execution Context (EC):
Environment where JS code is created & executed.
JS runs code using Execution Contexts.
*/

/* ---------- Types of EC ---------- 
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval EC (rare)
*/

/* ---------- Global Execution Context ----------
- Created once at program start
- Creates:
  - window object (browser)
  - this → window
- Stores global vars & functions
*/

/* ---------- Function Execution Context ----------
- Created on every function call
- Has its own:
  - Variable Environment
  - Lexical Environment
  - this
*/

/* ---------- Phases of Execution Context ----------

1. Creation Phase:
- Memory allocated
- var → undefined
- function → full definition
- let/const → hoisted but in TDZ
- this assigned

2. Execution Phase:
- Code runs line by line
- Variables get actual values
*/

/* ---------- Hoisting ----------
Hoisting = accessing the functions or variables even before they are initialized

var → exists early, value = undefined
let / const → exists early, but don’t touch before line
function() → ready to use anytime
Arrow function → behaves like variable

*/

/* ---------- Temporal Dead Zone (TDZ) ----------
Time between hoisting and initialization
TDZ is the time when a let or const variable exists, but you are NOT allowed to use it yet.
Accessing let/const in TDZ → ReferenceError
{
  // TDZ starts
  console.log(x); // ❌ not allowed
  // x exists but locked

  let x = 5; // TDZ ends
  console.log(x); // ✅ allowed
}
TDZ does NOT apply to var
*/

/* ---------- Call Stack ----------
Stack that manages order of execution contexts
LIFO (Last In First Out)
Its known by many diffrent names like : 
Execution Contect Stack 
Program stack
Control stack
Example:
Global EC → a() → b()
*/

/* ---------- Scope Chain ----------
Variable lookup order:
Local → Outer → Global
*/

/* ---------- Key Points ----------
- JS is single-threaded
- Uses Call Stack
- EC = Creation Phase + Execution Phase
- Core to understanding hoisting, scope, closures, this
*/
