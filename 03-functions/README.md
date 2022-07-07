<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 03. Functions

TODO:


## [`01-functions1.js`](./01-functions1.js)



```js
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
```

Execute this example with:

```bash
node ./03-functions/01-functions1.js
```


## [`02-functions2.js`](./02-functions2.js)



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


---


| [⬅️ 02-basics](/02-basics/README.md) | [🏠](/README.md) | [04-classes-and-prototypes ➡️](/04-classes-and-prototypes/README.md) |
|:------------------------------------|:---------------:|--------------------------------------------------------------------:|

