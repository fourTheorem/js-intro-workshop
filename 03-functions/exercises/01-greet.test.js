import tap from 'tap'

import greetSolution from './01-greet.solution.js'
import greetTpl from './01-greet.js'

const greet = process.env.TEST_SOLUTIONS ? greetSolution : greetTpl

tap.test('greet', async (t) => {
    const name = 'Jake'

    const result = greet(name)
    const expected = `Hello ${name}`

    t.equal(result, expected)
})