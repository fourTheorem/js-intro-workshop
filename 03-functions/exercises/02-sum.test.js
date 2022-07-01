import tap from 'tap'

import sumSolution from './02-sum.solution.js'
import sumTpl from './02-sum.js'

const sum = process.env.TEST_SOLUTIONS ? sumSolution : sumTpl

tap.test('sum list of numbers', async (t) => {
  const numbers = [1, 2, 3]

  const result = sum(numbers)
  const expected = 6

  t.equal(result, expected)
})

tap.test('sum an empty array', async (t) => {
  const numbers = []

  const result = sum(numbers)
  const expected = 0

  t.equal(result, expected)
})
