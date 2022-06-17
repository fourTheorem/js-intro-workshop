import tap from 'tap'

import greetSolution from './greet.solution.js'
import greetTpl from './greet.js'

const greet = process.env.TEST_SOLUTIONS ? greetSolution : greetTpl

tap.test('greet', async (t) => {
    t.equal(greet('Jake'), 'Hello Jake')
})