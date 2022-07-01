/* eslint no-unused-vars: "off" */

/*
  Exercise:

  Let's implement a `Basket` class.

  The class should implement the read-only property `items` that will be used
  to store the items added to the basket

  The class should also implement the following methods:
    * add: takes an instance of Product as argument and adds it to the list of items in the basket
    * remove: removes a given item name from the basket
    * getCount: returns the number of items in the basket
    * getTotal: returns the total of all items in the basket
    * getReceipt: returns a list of strings of receipts of each item in the basket

  Example:

  ```js
  const basket = new Basket()
  basket.add(new Product('Bread', 0.5, 5))
  basket.add(new Product('Milk', 3, 1))
  basket.add(new Product('Butter', 1, 1))

  basket.getCount()
  basket.getTotal()

  basket.remove('Butter')
  basket.getCount()
  basket.getTotal()
  ```

  Should return:

  ```plain
  7
  6.5

  6
  5.5
  ```
*/

import Product from './03-product.js'

export default class Basket {
  // Write your code here!
}
