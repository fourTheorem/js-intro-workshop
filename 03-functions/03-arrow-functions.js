/*

There a shorter version of the function expression syntax called "arrow functions".

*/

const hello = (name) => `Hello ${name}`

// An arrow function written as a one liner will automatically return the value of the expression

console.log(hello('Pippo'))

const hello2 = (name) => {
  // arrow functions can have a body with multiple lines
  // in this case you need to use an explicit return statement
  return `Hello ${name}`
}

console.log(hello2('Pippo'))

// The behavior of `this` in an arrow function is different from a normal function
// It is not bound to the object that calls it, but to the lexical scope of the function.
// Also in an arrow function you can't use `bind()` or `call()` to redefine the value of `this`.
const whatsThisArrow = () => console.log(this)
whatsThisArrow.call('ciao') // undefined

const whatsThisFn = function () {
  console.log(this)
}
whatsThisFn.call('ciao') // "ciao"
