/*

A recent update to the ECMAScript standard has added a new feature called private properties.

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
// console.log(char.#basePrice) // SyntaxError: Private field '#basePrice' must be declared in an enclosing class
