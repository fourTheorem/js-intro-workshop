import tap from 'tap'

import rouletteSolution from './02-promisify.solution.js'
import rouletteTpl from './02-promisify.js'

const roulette = process.env.TEST_SOLUTIONS ? rouletteSolution : rouletteTpl

tap.test('It promisified the function correctly', async (t) => {
  t.resolves(roulette(false), 'Returned a promise that resolves')
  t.rejects(() => roulette(true), 'Returned a promise that rejects in case of error')
})
