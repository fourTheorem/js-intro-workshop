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
