import Product from './03-product.solution.js'

export default class Basket {
  #items = []

  get items () { return this.#items }

  add (product) {
    if (product instanceof Product) {
      this.items.push(product)
    }
  }

  getCount () {
    let count = 0

    for (const item of this.#items) {
      count += item.quantity
    }

    return count
  }

  getTotal () {
    let total = 0

    for (const item of this.#items) {
      total += item.getTotal()
    }

    return total
  }

  remove (product) {
    this.#items = this.#items.filter((item) => {
      return item.name !== product
    })
  }

  getReceipt () {
    const receipts = this.#items.map((item) => {
      return item.getReceipt()
    })

    return receipts
  }
}
