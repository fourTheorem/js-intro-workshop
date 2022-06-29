import tap from 'tap'

import productSolution from './03-product.solution.js'
import productTpl from './03-product.js'

const Product = process.env.TEST_SOLUTIONS ? productSolution : productTpl

const name = 'Bread'
const price = 0.5
const quantity = 5

tap.test('Product Properties', async (t) => {
    const product = new Product(name, price, quantity)

    t.equal(product.name, name)
    t.equal(product.price, price)
    t.equal(product.quantity, quantity)
})

tap.test('Product Total', async (t) => {
    const product = new Product(name, price, quantity)

    t.equal(product.getTotal(), 2.5)
})

tap.test('Product Update Quantity', async (t) => {
    const product = new Product(name, price, quantity)
    
    t.equal(product.quantity, quantity)

    const newQuantity = 10
    const expectedNewTotal = price * newQuantity
    product.updateQuantity(newQuantity)
    t.equal(product.quantity, newQuantity)

    t.equal(product.getTotal(), expectedNewTotal)
})

tap.test('Product Total', async (t) => {
    const product = new Product(name, price, quantity)

    const expected = `Product: ${name}, Quantity: ${quantity}, Total: ${price * quantity}`
    t.equal(product.getReceipt(), expected)
})