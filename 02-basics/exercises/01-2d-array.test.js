import tap from 'tap'

import print2dArraySolution from './01-2d-array.solution.js'
import print2dArrayTpl from './01-2d-array.js'

const print2dArray = process.env.TEST_SOLUTIONS ? print2dArraySolution : print2dArrayTpl

tap.test('print2dArray', async (t) => {
  const input = [[1, 2], [3, 4], [5, 6]]

  const result = print2dArray(input)
  const expected = [1, 2, 3, 4, 5, 6]

  t.same(result, expected)
})
