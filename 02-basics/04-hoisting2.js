/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-use-before-define: "off" */
/* eslint no-redeclare: "off" */

a = 5
console.log(a) // 5
var a

// SAME AS:

var a
a = 5
console.log(a) // 5

// BUT

console.log(a) // undefined
var a = 5
