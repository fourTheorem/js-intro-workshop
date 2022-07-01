export default class Product {
  #name
  #price
  #quantity

  constructor (name, price, quantity) {
    this.#name = name
    this.#price = price
    this.#quantity = quantity
  }

  get name () { return this.#name }
  get price () { return this.#price }
  get quantity () { return this.#quantity }

  updateQuantity (value) {
    this.#quantity = value
  }

  getTotal () {
    return this.#price * this.#quantity
  }

  getReceipt () {
    return `Product: ${this.#name}, Quantity: ${this.quantity}, Total: ${this.getTotal()}`
  }
}
