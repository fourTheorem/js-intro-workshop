import tap from 'tap'

import deleteElementSolution from './03-delete-element.solution.js'
import deleteElementTpl from './03-delete-element.js'

const deleteElement = process.env.TEST_SOLUTIONS ? deleteElementSolution : deleteElementTpl

tap.test('deleteElement', async (t) => {
  const input = [7, 9, 13, 19, 27, 49, 80]
  const elementToRemove = 19

  const result = deleteElement(input, elementToRemove)
  const expected = [7, 9, 13, 27, 49, 80]

  t.equal(result, expected)
})

tap.test('deleteElement with number not in array', async (t) => {
  const input = [7, 9, 13, 19, 27, 49, 80]
  const elementToRemove = 21

  const result = deleteElement(input, elementToRemove)
  const expected = input

  t.equal(result, expected)
})
