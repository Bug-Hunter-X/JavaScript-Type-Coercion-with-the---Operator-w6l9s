# JavaScript Type Coercion Bug
This repository demonstrates a common JavaScript bug related to type coercion with the + operator. When adding a number and a string, JavaScript performs string concatenation instead of numerical addition, leading to unexpected results.  The solution shows how to explicitly type check variables to enforce numerical addition.

## Bug
The `bug.js` file shows the unexpected behavior.  The `+` operator concatenates the string and number instead of adding them. 

## Solution
The `bugSolution.js` file provides a solution that uses explicit type checking (typeof operator) to handle the addition correctly.  This avoids the implicit type coercion and produces the expected numerical result. 