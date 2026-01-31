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
Hoisting = memory allocation during creation phase

var       → hoisted, value = undefined
let/const → hoisted, TDZ (cannot access before init)
function  → hoisted with full body
*/

/* ---------- Temporal Dead Zone (TDZ) ----------
Time between hoisting and initialization
Accessing let/const in TDZ → ReferenceError
*/

/* ---------- Call Stack ----------
Stack that manages execution contexts
LIFO (Last In First Out)

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
