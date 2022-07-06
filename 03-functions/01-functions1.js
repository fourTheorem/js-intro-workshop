/* eslint no-unused-vars: "off" */

// different ways to declare a function

function hello (name) {
  return `Hello ${name}`
}

hello('Pippo')

// ...

const hello2 = function (name) {
  return `Hello ${name}`
}

hello2('Pippo')

// arrow function

const hello3 = (name) => `Hello ${name}`

// This is not just a syntactic sugar, it halso handles scope differently (how `this` is resolved)
// Also it does not allow you to re-define the value of `this`
