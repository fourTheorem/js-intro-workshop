/*

JavaScript has prototypal inheritance.

This means that objects have a link to a prototype where methods and attributes can be defined.

A prototype can link to another prototype, effectively creating a chain of prototypes.

Prototypes are different from traditional object oriented inheritance because they can be changed at runtime.

Modern JavaScript (ES2015) introduced the concept of classes that look much closer to traditional object oriented inheritance, but
in reality they are still syntactic sugar for prototypal inheritance.

*/

function Greeter (name) {
  this.name = name
}

Greeter.prototype.greet = function () {
  return `Hello ${this.name}`
}

const greeter = new Greeter('Chicken')
console.log(greeter.greet())
console.log(greeter.greet.bind({ name: 'fox' })())
