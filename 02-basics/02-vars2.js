/* eslint no-var: "off" */
/* eslint prefer-const: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-use-before-define: "off" */
/* eslint no-redeclare: "off" */
/* eslint no-undef: "off" */

/*

There are different ways to declare variables in JavaScript.

The three main keywords are `var`, `let` and `const`.

*/

var a = 1
var a = 2
var a = 3

// var is the most generic way to define a variable
// You can redefine a variable if it was defined with var

let b = 1
// let b = 2 // <-- this fails. With let you cannot re-define a variable
b = 2 // this is OK, let allows you to mutate variable bindings

const c = 1
// const c = 2 // <-- fails as before
// c = 2 // <-- fails because you cannot change the variable binding with conts

const d = {}
d.foo = 'bar' // This is allowed because we are not changing the binding,
// but rather the value associated to the variable

// similarly

const e = []
e.push('chicken') // this is allowed as above
