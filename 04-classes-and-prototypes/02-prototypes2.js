/*

In traditional JavaScript, a function can be used as a constructor.

The function can assign different properties to the `this` object and it doesn't have to return an object.

*/

function Greeter (name) {
  this.name = name
  this.greet = function () {
    return `Hello ${this.name}`
  }
}

Greeter.prototype.megaGreet = function () {
  return `HELLO ${this.name.toUpperCase()}`
}

Greeter.prototype.VERSION = '1.0.0' // this is a static property added directly to the prototype

const greeter = new Greeter('Chicken')

console.log(greeter.greet()) // "Hello Chicken"
console.log(greeter.megaGreet()) // "HELLO CHICKEN"
console.log(greeter.VERSION) // "1.0.0"

console.log(greeter) // Greeter { name: 'Chicken', greet: [Function (anonymous)] }
console.log(greeter.constructor) // [Function: Greeter]
console.log(greeter.constructor.toString()) // ... the full code of the constructor function ...
console.log(Object.getPrototypeOf(greeter)) // { megaGreet: [Function (anonymous)], VERSION: '1.0.0' }
