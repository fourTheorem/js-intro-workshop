/*
  Exercise:

  Let's implement a `Product` class.

  The constructor of this new class should take as arguments the product name, price and quantity
  and both should be publicly available as read-only properties

  The class should also implement the following methods:
    * updateQuantity: takes a new value as argument and updates the quantity
    * getTotal: returns the total price of the product by multiplying the price with quantity
    * getReceipt: returns a string with the summary of the purchase: `Product: {name}, Quantity: {quantity}, Total: {total}`

  Example:

  ```js
  const bread = new Product('Bread', 0.5, 5)
  bread.getTotal()

  bread.updateQuantity(10)
  bread.getTotal()

  bread.getReceipt()
  ```

  Should return:

  ```plain
  2.5
  5
  Product: Bread, Quantity: 10, Total: 5
  ```

  Test your solution with:

  > npm run ex -- 04-classes-and-prototypes/exercises/03-product.test.js
*/

export default class Product {
  // Write your code here!
}
