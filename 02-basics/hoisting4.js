/**
 * when using let, the variable is not hoisted
 */

a = 5; // ReferenceError: Cannot access 'a' before initialization
console.log(a);
let a;

// SAME with functions

greet(); // Uncaught ReferenceError: greet is not defined

let greet = function() {
    console.log('Hi, there.');
}

// IF var was used instead

greet(); // Uncaught TypeError: greet is not a function

var greet = function() {
    console.log('Hi, there.');
}