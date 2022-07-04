import tap from 'tap'

import evenNumbersSolution from './02-even-numbers.solution.js'
import evenNumbersTpl from './02-even-numbers.js'

const evenNumbers = process.env.TEST_SOLUTIONS ? evenNumbersSolution : evenNumbersTpl

tap.test('evenNumbers', async (t) => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const result = evenNumbers(input)
  const expected = [2, 4, 6, 8, 10]

  t.equal(result, expected)
})
