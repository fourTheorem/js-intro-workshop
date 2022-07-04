import tap from 'tap'

import rejectPromiseSolution from './02-reject-promise.solution.js'
import rejectPromiseTpl from './02-reject-promise.js'

const rejectPromise = process.env.TEST_SOLUTIONS ? rejectPromiseSolution : rejectPromiseTpl

tap.test('returns a promise', async (t) => {
  const promise = rejectPromise()

  t.type(promise, Promise)
})

tap.test('rejects with Boo!', async (t) => {
  return rejectPromise()
    .then(() => {
      t.fail('This promise should have rejected')
    })
    .catch((err) => {
      t.equal(err, 'Boo!')
    })
})
