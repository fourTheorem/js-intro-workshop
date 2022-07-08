<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 03. Functions

In this chapter we are going to learn the basics of functions in JavaScript:

  - How to define a function
  - How the `this` keyword works
  - Arrow functions


## [`01-functions1.js`](./01-functions1.js)

In JavaScript there are different ways to declare a function

```js
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
```

Execute this example with:

```bash
node ./03-functions/01-functions1.js
```


## [`02-functions2.js`](./02-functions2.js)

Inside a function you can access the special keyword `this` to refer to the object that is calling the function.

`this` is dynamic and you can use the methods `.bind()` or `.call()` to bind (re-assing) the `this` keyword to a specific object.

```js
function greeting () {
  return `Hello ${this}`
}

console.log(greeting())
console.log(greeting.bind('world')())
```

Execute this example with:

```bash
node ./03-functions/02-functions2.js
```


## [`03-arrow-functions.js`](./03-arrow-functions.js)

There a shorter version of the function expression syntax called "arrow functions".

```js
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
```

Execute this example with:

```bash
node ./03-functions/03-arrow-functions.js
```


---


| [⬅️ 02-basics](/02-basics/README.md) | [🏠](/README.md) | [04-classes-and-prototypes ➡️](/04-classes-and-prototypes/README.md) |
|:------------------------------------|:---------------:|--------------------------------------------------------------------:|

