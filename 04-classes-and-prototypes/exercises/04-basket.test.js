import tap from 'tap'

import productSolution from './03-product.solution.js'
import productTpl from './03-product.js'
import basketSolution from './04-basket.solution.js'
import basketTpl from './04-basket.js'

const Product = process.env.TEST_SOLUTIONS ? productSolution : productTpl
const Basket = process.env.TEST_SOLUTIONS ? basketSolution : basketTpl

// tap.test

// tap.test('Basket Count', async (t) => {
//     let items = ['Bread', 'Milk', 'Butter']

//     const basket = new Basket()
    
//     for (let item of items) {
//         basket.add(item)
//     }

//     t.same(basket.items, items)
//     t.equal(basket.count(), items.length)
// })

// tap.test('Basket Remove', async (t) => {
//     let items = ['Bread', 'Milk', 'Butter']

//     const basket = new Basket()
    
//     for (let item of items) {
//         basket.add(item)
//     }

//     basket.remove('Bread')

//     const expected = ['Milk', 'Butter']

//     t.same(basket.items, expected)
//     t.equal(basket.count(), expected.length)
// })
