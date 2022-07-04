import tap from 'tap'

import sumSolution from './04-sum.solution.js'
import sumTpl from './04-sum.js'

const sum = process.env.TEST_SOLUTIONS ? sumSolution : sumTpl

tap.test('sum', async (t) => {
  const input = [2, 6, 17, 20, 1, 3]

  const result = sum(input)
  const expected = 49

  t.equal(result, expected)
})

tap.test('sum with empty array', async (t) => {
  const input = []

  const result = sum(input)
  const expected = 0

  t.equal(result, expected)
})
