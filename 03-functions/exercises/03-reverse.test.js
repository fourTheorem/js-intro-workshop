import tap from 'tap'

import reverseSolution from './03-reverse.solution.js'
import reverseTpl from './03-reverse.js'

const reverse = process.env.TEST_SOLUTIONS ? reverseSolution : reverseTpl

tap.test('reverse', async (t) => {
  const text = 'chicken'

  const result = reverse(text)
  const expected = 'nekcihc'

  t.equal(result, expected)
})

tap.test('reverse an empty string', async (t) => {
  const text = ''

  const result = reverse(text)
  const expected = ''

  t.equal(result, expected)
})
