<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 02. Basics

In this chapter we are going to learn some of the basics of the JavaScript language.

We will be talking about:

  - variables
  - hoisting
  - timer functions


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

> Execute this example with:
>
> ```bash
> node ./02-basics/01-vars1.js
> ```


## [`02-vars2.js`](./02-vars2.js)

There are different ways to declare variables in JavaScript.

The three main keywords are `var`, `let` and `const`.

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

> Execute this example with:
>
> ```bash
> node ./02-basics/02-vars2.js
> ```


## [`03-hoisting1.js`](./03-hoisting1.js)

One of the most confusing aspects of JavaScript is **hoisting**.

Hoisting is a JavaScript feature that causes variables and function declarations to be moved to the top of their scope before code execution.

This means that you can use a variable or function before it is declared.

```js
console.log(test) // undefined
var test

// SAME AS:

var test
console.log(test) // undefined
```

> Execute this example with:
>
> ```bash
> node ./02-basics/03-hoisting1.js
> ```


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

> Execute this example with:
>
> ```bash
> node ./02-basics/04-hoisting2.js
> ```


## [`05-hoisting3.js`](./05-hoisting3.js)

When the variable is used inside the function, the variable is hoisted only to the top of the function

```js
var a = 4

function greet () {
  b = 'hello'
  console.log(b) // hello
  var b
}

greet() // hello
console.log(b) // Uncaught ReferenceError: b is not defined
```

> Execute this example with:
>
> ```bash
> node ./02-basics/05-hoisting3.js
> ```


## [`06-hoisting4.js`](./06-hoisting4.js)

When using `let`, the variable is NOT hoisted!

```js
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

> Execute this example with:
>
> ```bash
> node ./02-basics/06-hoisting4.js
> ```


## [`07-hoisting-challenge1.js`](./07-hoisting-challenge1.js)

Here's a bit of a challenge for you.

Can you tell what value will be printed by the following code?

<details>
<summary>👀  <strong>Check out the answer!</strong></summary>

> ### Answer: `10`
>
> - Here the variable `x` declared (and of course initialized) outside the function `test`.
> - It has a global scope and that’s why it is accessible anywhere in this scope globally.
> - However, the one declared and initialized inside the `test` function can be accessible only inside that function.
> - So the below code snippet will print 20 on the console upon execution.
>

</details>

```js
var x = 10
function test () {
  var x = 20
}

test()
console.log(x) // ???
```

> Execute this example with:
>
> ```bash
> node ./02-basics/07-hoisting-challenge1.js
> ```


## [`08-hoisting-challenge2.js`](./08-hoisting-challenge2.js)

Here's another of a challenge for you.

Can you tell what value will be printed by the following code?

<details>
<summary>👀  <strong>Check out the answer!</strong></summary>

> ### Answer: `undefined`
>
> - This is because of the combined effect of variable scoping and variable hoisting
> - The above code snippet will be interpreted as the following before execution:
>
> ```js
> var x;
> x = 10;
>
> function test()
> {
>   var x;
>   if (x > 20) {
>     x = 50;
>   }
>
>   console.log(x);
> }
>
> test();
> ```

</details>

```js
var x = 10

function test () {
  if (x > 20) {
    var x = 50
  }

  console.log(x) // ???
}

test()
```

> Execute this example with:
>
> ```bash
> node ./02-basics/08-hoisting-challenge2.js
> ```


## [`09-set-immediate.js`](./09-set-immediate.js)

JavaScript offers different pieces of functionality to deal with timers and delayed actions.

`setImmediate()` and `setTimeout()` are similar, but behave in different ways depending on when they are called.

- `setImmediate()` executes once the current poll phase completes.
- `setTimeout()` is scheduled to be run after a minimum threshold in ms has elapsed.

```js
setTimeout(() => {
  console.log('timeout') // 3.
}, 0)

setImmediate(() => {
  console.log('immediate') // 2.
})

console.log('global') // 1.
```

> Execute this example with:
>
> ```bash
> node ./02-basics/09-set-immediate.js
> ```


## [`10-set-timeout.js`](./10-set-timeout.js)

In this example we are printing "Hello" after about 1 second.

`SetTimeout` will execute the code specified in the passed function only once.

```js
setTimeout(() => {
  console.log('Hello')
}, 1000)

console.log('Bye')
```

> Execute this example with:
>
> ```bash
> node ./02-basics/10-set-timeout.js
> ```


## [`11-set-interval.js`](./11-set-interval.js)

If you want to execute a certain function repeatedly at specific intervals of time you can use `setInterval()`.

```js
setInterval(() => {
  console.log('Ping')
}, 1000) // will repeat every second

const interval = setInterval(() => {
  console.log('Pong')
  // you can cancel an interval by calling clearInterval
  clearInterval(interval)
}, 1000) // will repeat every second, but we cancel it after the first execution!
```

> Execute this example with:
>
> ```bash
> node ./02-basics/11-set-interval.js
> ```


## [`12-destructuring-assignment1.js`](./12-destructuring-assignment1.js)

The destructuring assignment syntax is a JavaScript expression that makes it
possible to unpack values from arrays or properties from objects, into distinct variables.

<details>
<summary><strong>Syntax</strong></summary>

> ```js
> const [a, b] = array
> const [a, , b] = array
> const [a = aDefault, b] = array
> const [a, b, ...rest] = array
> const [a, , b, ...rest] = array
> const [a, b, ...{ pop, push }] = array
> const [a, b, ...[c, d]] = array
> ```
</details>

```js
const [a, b, ...rest] = [10, 20, 30, 40, 50]

console.log(a)
// expected output: 10

console.log(b)
// expected output: 20

console.log(rest)
// expected output: Array [30, 40, 50]
```

> Execute this example with:
>
> ```bash
> node ./02-basics/12-destructuring-assignment1.js
> ```


## [`13-destructuring-assignment2.js`](./13-destructuring-assignment2.js)

We can use the destructuring assignment to loop over keys-and-values of an object:

<details>
<summary><strong>Syntax</strong></summary>

> ```js
> const { a, b } = obj
> const { a: a1, b: b1 } = obj
> const { a: a1 = aDefault, b = bDefault } = obj
> const { a, b, ...rest } = obj
> const { a: a1, b: b1, ...rest } = obj
> ```
</details>

```js
const user = {
  name: 'John',
  age: 30
}

// loop over keys-and-values
for (const [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`) // name:John, then age:30
}
```

> Execute this example with:
>
> ```bash
> node ./02-basics/13-destructuring-assignment2.js
> ```


---


| [⬅️ 01-intro](/01-intro/README.md) | [🏠](/README.md) | [03-functions ➡️](/03-functions/README.md) |
|:----------------------------------|:---------------:|------------------------------------------:|

