<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 04. Classes and Prototypes

In this chapter we will learn the basic of prototypal inheritance and classes:

  - What prototypal inheritance is and how it works
  - Using the `.prototype` property
  - Creating prototypes using functions
  - Creating prototypes using the `class` keyword
  - Extending prototypes and chaning prototypes at runtime


## [`01-prototypes1.js`](./01-prototypes1.js)

JavaScript has prototypal inheritance.

This means that objects have a link to a prototype where methods and attributes can be defined.

A prototype can link to another prototype, effectively creating a chain of prototypes.

Prototypes are different from traditional object oriented inheritance because they can be changed at runtime.

Modern JavaScript (ES2015) introduced the concept of classes that look much closer to traditional object oriented inheritance, but
in reality they are still syntactic sugar for prototypal inheritance.

```js
function Greeter (name) {
  this.name = name
}

Greeter.prototype.greet = function () {
  return `Hello ${this.name}`
}

const greeter = new Greeter('Chicken')
console.log(greeter.greet())
console.log(greeter.greet.bind({ name: 'fox' })())
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/01-prototypes1.js
```


## [`02-prototypes2.js`](./02-prototypes2.js)

In traditional JavaScript, a function can be used as a constructor.

The function can assign different properties to the `this` object and it doesn't have to return an object.

```js
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
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/02-prototypes2.js
```


## [`03-prototypes3.js`](./03-prototypes3.js)

We said that prototypes can be changed at runtime.

This is something that allows to change the behaviour of all the objects that inherit from a specific prototype (including objects that have been created already).

This is something that can be used to extend even native prototypes like String.

This is often used in polyfills to add missing methods to native prototypes.

```js
// extending a native class
String.prototype.greet = function () {
  return `Hello ${this}`
}

console.log('Chicken'.greet()) // "Hello Chicken"
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/03-prototypes3.js
```


## [`04-class1.js`](./04-class1.js)

EcmaScript 2015 (ES6 or ES2015) introduced the `class` keyword, which allows us to define prototypes in a more natural way.

```js
class Vehicle {
  constructor (wheels, engine) { // the constructor
    this.wheels = wheels
    this.engine = engine
  }

  describe () { // a method
    console.log(`This vehicle has ${this.wheels} wheels and a ${this.engine} engine`)
  }
}

const car = new Vehicle(4, 'diesel')

car.describe()
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/04-class1.js
```


## [`05-class2.js`](./05-class2.js)

The new `class` keyword can be combined with the `extends` keyword to create a class that inherits from another class (or to link the current prototype to another prototype).

```js
class Vehicle {
  constructor (wheels, engine) {
    this.wheels = wheels
    this.engine = engine
  }

  describe () {
    console.log(`This vehicle has ${this.wheels} wheels and a ${this.engine} engine`)
  }
}

class Car extends Vehicle {
  constructor (make, engine, tankSize) {
    super(4, engine)

    this.make = make
    this.tankSize = tankSize
  }

  describe () {
    console.log(`${this.make} has a ${this.engine} engine with a size of ${this.tankSize}`)
  }
}

const audi = new Car('Audi', 'petrol', '45L')
const volvo = new Car('Volvo', 'diesel', '60L')

audi.describe()
volvo.describe()
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/05-class2.js
```


## [`06-class3.js`](./06-class3.js)



```js
class Vehicle {
  constructor (wheels, engine) {
    this.wheels = wheels
    this.engine = engine
  }

  describe () {
    console.log(`This vehicle has ${this.wheels} wheels and a ${this.engine} engine`)
  }
}

class Car extends Vehicle {
  constructor (make, engine, tankSize) {
    super(4, engine)

    this.make = make
    this.tankSize = tankSize
  }

  describe () {
    console.log(`${this.make} has a ${this.engine} engine with a size of ${this.tankSize}`)
  }
}

class ElectricCar extends Car {
  constructor (make, range) {
    super(make, 'eletrict', null)

    this.range = range
  }

  describe () {
    console.log(`${this.make} has a ${this.engine} engine with a range of ${this.range}`)
  }
}

const audi = new Car('Audi', 'petrol', '45L')
const volvo = new Car('Volvo', 'diesel', '60L')
const tesla = new ElectricCar('Tesla', '270 miles')

audi.describe()
volvo.describe()
tesla.describe()
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/06-class3.js
```


## [`07-class4.js`](./07-class4.js)

A recent update to the ECMAScript standard has added a new feature called private properties.

```js
class Product {
  #basePrice
  #maxDiscount

  constructor (name) {
    this.name = name

    this.#basePrice = 50
    this.#maxDiscount = 5
  }

  #getChairAmount (taxCharge) {
    return this.#basePrice + (this.#basePrice - this.#basePrice * this.#maxDiscount / 100) + taxCharge
  }

  purchase () {
    console.log('**** BILLING INFORMATION ****')
    console.log(`Product = ${this.name}`)
    console.log(`Price = ${this.#getChairAmount(20)}`)
  }
}

const chair = new Product('Office Chair')
chair.purchase()
// console.log(char.#basePrice) // SyntaxError: Private field '#basePrice' must be declared in an enclosing class
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/07-class4.js
```


## [`08-class5.js`](./08-class5.js)

It is also possible to define static members in a class.

```js
class Product {
  static CATEGORY = 'Undefined'

  constructor (name) {
    this.name = name
  }
}

class Chair extends Product {
  static CATEGORY = 'Furniture'
}

class Table extends Product {

}

console.log(`Chair category = ${Chair.CATEGORY}`)
console.log(`Table category = ${Table.CATEGORY}`)
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/08-class5.js
```


## [`09-class-with-typescript.ts`](./09-class-with-typescript.ts)

We will discuss more TypeScript, but for now, keep in mind that when you declare a class with TypeScript,
it will automatically create a type associated to it and it will use it for type-checking.

TypeScript classes support additional features like access modifiers.

These are different from the access modifiers you've seen previously. In fact, TypeScript uses the access modifiers only at compile time (type checking).

Once the code is converted to JavaScript, you can access private members if you really want to (they are not really private)!

```ts
class Chicken {
  private _age: number = 2

  toString (): string {
    return `This chicken is ${this._age} years old`
  }
}

// Transpiled output: See class1.transpiled.js

const chicken = new Chicken()
// console.log(chicken._age) // Property 'age' is private and only accessible within class 'Chicken'.

// Show example: React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED

/// /////////////////////////////////////////////////////////////////////////////
// The code above transpiles to the following plain JavaScript:
//
// "use strict";
// class Chicken {
//     constructor() {
//         this._age = 2;
//     }
//     toString () {
//         return `This chicken is ${this._age} years old`;
//     }
// }
// const chicken = new Chicken();
// console.log(chicken._age);
```

Execute this example with:

```bash
ts-node ./04-classes-and-prototypes/09-class-with-typescript.ts
```


## [`10-getters-setters.js`](./10-getters-setters.js)

The class syntax supports also getters and setters for dynamic properties

```js
// Objects
const myObject = {
  price: 10,
  quantity: 3,

  get total () {
    return this.price * this.quantity
  }
}

console.log(myObject.total)

// Classes
class MyClass {
  #price
  #quantity

  constructor (price, quantity) {
    this.#price = price
    this.#quantity = quantity
  }

  get price () { return this.#price }
  get quantity () { return this.#quantity }

  get total () {
    return this.#price * this.quantity
  }
}

const myClass = new MyClass(90, 2)
console.log(myClass.total)
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/10-getters-setters.js
```


---


| [⬅️ 03-functions](/03-functions/README.md) | [🏠](/README.md) | [05-typescript ➡️](/05-typescript/README.md) |
|:------------------------------------------|:---------------:|--------------------------------------------:|

