import tap from 'tap'

import dogSolution from './02-dog.solution.js'
import dogTpl from './02-dog.js'

const Dog = process.env.TEST_SOLUTIONS ? dogSolution : dogTpl

tap.test('Dog introduce', async (t) => {
    const name = 'Rocky'

    const dog = new Dog(name)

    const result = dog.introduce()
    const expected = `My name is ${name}`

    t.equal(result, expected)
})

tap.test('Dog bark', async (t) => {
    const result = Dog.bark()
    const expected = 'Woof!'

    t.equal(result, expected)
});