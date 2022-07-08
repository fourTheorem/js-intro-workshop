/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-use-before-define: "off" */
/* eslint no-redeclare: "off" */

/*

One of the most confusing aspects of JavaScript is **hoisting**.

Hoisting is a JavaScript feature that causes variables and function declarations to be moved to the top of their scope before code execution.

This means that you can use a variable or function before it is declared.

*/

console.log(test) // undefined
var test

// SAME AS:

var test
console.log(test) // undefined
