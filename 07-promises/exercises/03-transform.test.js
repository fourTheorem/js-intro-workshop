import tap from 'tap'

import transformSolution from './03-transform.solution.js'
import transformTpl from './03-transform.js'

const transform = process.env.TEST_SOLUTIONS ? transformSolution : transformTpl

tap.test('transforms a promises resolution value', async (t) => {
  const promise = Promise.resolve('chicken')
  const tranformer = (value) => `Super ${value}`

  return transform(promise, tranformer)
    .then((value) => {
      t.equal(value, 'Super chicken')
    })
})

tap.test('returns a promise that rejects if the first promise rejects', async (t) => {
  const promise = Promise.reject('Fox!')
  const tranformer = (value) => value

  return transform(promise, tranformer)
    .then((value) => {
      t.fail(`This should not resolve! It resolved with: ${value}`)
    })
    .catch((err) => {
      t.equal(err, 'Fox!')
    })
})
