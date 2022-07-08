/*

Inside a function you can access the special keyword `this` to refer to the object that is calling the function.

`this` is dynamic and you can use the methods `.bind()` or `.call()` to bind (re-assing) the `this` keyword to a specific object.

*/

function greeting () {
  return `Hello ${this}`
}

console.log(greeting())
console.log(greeting.bind('world')())
