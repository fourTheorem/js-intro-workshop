/**
 * when the variable is used inside the function, 
 * the variable is hoisted only to the top of the function
 */

 var a = 4;

 function greet() {
     b = 'hello';
     console.log(b); // hello
     var b;
 }
 
 greet(); // hello
 console.log(b); // Uncaught ReferenceError: b is not defined