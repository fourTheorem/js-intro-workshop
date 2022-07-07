<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 04. Classes and Prototypes

TODO:


## [`01-prototypes1.js`](./01-prototypes1.js)



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



```js
function Greeter (name) {
  return {
    greet () {
      return `Hello ${name}`
    }
  }
}

const greeter = new Greeter('Chicken')
// greeter.name = 'Chicken'
console.log(greeter.greet())
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/02-prototypes2.js
```


## [`03-prototypes3.js`](./03-prototypes3.js)



```js
// extending a native class
String.prototype.greet = function () {
  return `Hello ${this}`
}

console.log('Chicken'.greet())

// This is what happens with polyfill
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/03-prototypes3.js
```


## [`04-class1.js`](./04-class1.js)



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

const car = new Vehicle(4, 'diesel')

car.describe()
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/04-class1.js
```


## [`05-class2.js`](./05-class2.js)



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



```js
/**
 * Private members
 */

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
```

Execute this example with:

```bash
node ./04-classes-and-prototypes/07-class4.js
```


## [`08-class5.js`](./08-class5.js)



```js
/**
 * Static members
 */

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
node ./04-classes-and-prototypes/09-class-with-typescript.ts
```


## [`10-getters-setters.js`](./10-getters-setters.js)



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

