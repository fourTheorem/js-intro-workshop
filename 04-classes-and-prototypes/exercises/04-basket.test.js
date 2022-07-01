/* eslint no-unused-vars: "off" */

import tap from 'tap'

import productSolution from './03-product.solution.js'
import productTpl from './03-product.js'
import basketSolution from './04-basket.solution.js'
import basketTpl from './04-basket.js'

const Product = process.env.TEST_SOLUTIONS ? productSolution : productTpl
const Basket = process.env.TEST_SOLUTIONS ? basketSolution : basketTpl

tap.test('Basket Count', async (t) => {
  const productNames = ['Bread', 'Milk', 'Butter']
  const products = productNames.map((name, i) => new Product(name, (i + 1) * 10, 1))

  const basket = new Basket()

  for (const product of products) {
    basket.add(product)
  }

  t.same(basket.items, products)
  t.equal(basket.getCount(), products.length)
})

tap.test('Basket Remove', async (t) => {
  const productNames = ['Bread', 'Milk', 'Butter']
  const products = productNames.map((name, i) => new Product(name, (i + 1) * 10, 1))

  const basket = new Basket()

  for (const product of products) {
    basket.add(product)
  }

  basket.remove('Bread')

  const expected = products.filter(p => p.name !== 'Bread')

  t.same(basket.items, expected)
  t.equal(basket.getCount(), expected.length)
})
