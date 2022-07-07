<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 02. Basics

TODO:


## [`01-vars1.js`](./01-vars1.js)

In JavaScript, variables are loosely typed and type can be changed at runtime.

You can declare a variable with `var`.

```js
var foo = 1

foo = 'Chicken'

foo = {
  hello: 'world'
}
```

Execute this example with:

```bash
node ./02-basics/01-vars1.js
```


## [`02-vars2.js`](./02-vars2.js)



```js
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
```

Execute this example with:

```bash
node ./02-basics/02-vars2.js
```


## [`03-hoisting1.js`](./03-hoisting1.js)



```js
console.log(test) // undefined
var test

// SAME AS:

var test
console.log(test) // undefined
```

Execute this example with:

```bash
node ./02-basics/03-hoisting1.js
```


## [`04-hoisting2.js`](./04-hoisting2.js)



```js
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
```

Execute this example with:

```bash
node ./02-basics/04-hoisting2.js
```


## [`05-hoisting3.js`](./05-hoisting3.js)



```js
/**
 * when the variable is used inside the function,
 * the variable is hoisted only to the top of the function
 */

var a = 4

function greet () {
  b = 'hello'
  console.log(b) // hello
  var b
}

greet() // hello
console.log(b) // Uncaught ReferenceError: b is not defined
```

Execute this example with:

```bash
node ./02-basics/05-hoisting3.js
```


## [`06-hoisting4.js`](./06-hoisting4.js)



```js
/**
 * when using let, the variable is not hoisted
 */

a = 5 // ReferenceError: Cannot access 'a' before initialization
console.log(a)
let a

// SAME with functions

greet() // Uncaught ReferenceError: greet is not defined

let greet = function () {
  console.log('Hi, there.')
}

// IF var was used instead

greet() // Uncaught TypeError: greet is not a function

// var greet = function () {
//   console.log('Hi, there.')
// }
```

Execute this example with:

```bash
node ./02-basics/06-hoisting4.js
```


## [`07-hoisting-challenge1.js`](./07-hoisting-challenge1.js)



```js
/**
 * What value will be printed?
 */

var x = 10
function test () {
  var x = 20
}

test()
console.log(x)

/**
 * Answer: 10
 *
 * Here the variable ‘x’ declared (and of course initialized) outside the function ‘test’
 * has a global scope and that’s why it is accessible anywhere in this scope globally.
 * However, the one declared and initialized inside the ‘test’ function can be accessible only inside that function.
 * So the below code snippet will print 20 on the console upon execution.
 */
```

Execute this example with:

```bash
node ./02-basics/07-hoisting-challenge1.js
```


## [`08-hoisting-challenge2.js`](./08-hoisting-challenge2.js)



```js
/**
 * What value will be printed?
 */

var x = 10

function test () {
  if (x > 20) {
    var x = 50
  }

  console.log(x)
}

test()

/**
 * Answer: undefined
 *
 * This is because of the combined effect of variable scoping and variable hoisting
 * The above code snippet will be interpreted as the following before execution:

  var x;
  x = 10;

  function test()
  {
    var x;
    if (x > 20) {
      x = 50;
    }

    console.log(x);
  }

  test();
 */
```

Execute this example with:

```bash
node ./02-basics/08-hoisting-challenge2.js
```


## [`09-set-immediate.js`](./09-set-immediate.js)



```js
/**
 * setImmediate() and setTimeout() are similar, but behave in different ways depending on when they are called.
 *
 * setImmediate() executes once the current poll phase completes.
 * setTimeout() is scheduled to be run after a minimum threshold in ms has elapsed.
 */

setImmediate(() => {
  console.log('immediate')
})

setTimeout(() => {
  console.log('timeout')
}, 0)

console.log('global')
```

Execute this example with:

```bash
node ./02-basics/09-set-immediate.js
```


## [`10-set-timeout.js`](./10-set-timeout.js)



```js
setTimeout(() => {
  console.log('Hello')
}, 1000)

console.log('Bye')
```

Execute this example with:

```bash
node ./02-basics/10-set-timeout.js
```


## [`11-set-interval.js`](./11-set-interval.js)



```js
setInterval(() => {
  console.log('Ping')
}, 1000)

const interval = setInterval(() => {
  console.log('Ping')
  // you can cancel an interval by calling clearInterval
  clearInterval(interval)
}, 1000)
```

Execute this example with:

```bash
node ./02-basics/11-set-interval.js
```


---


| [⬅️ 01-intro](/01-intro/README.md) | [🏠](/README.md) | [03-functions ➡️](/03-functions/README.md) |
|:----------------------------------|:---------------:|------------------------------------------:|

