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
