import tap from 'tap'

import rejectPromiseSolution from './02-reject-promise.solution.js'
import rejectPromiseTpl from './02-reject-promise.js'

const rejectPromise = process.env.TEST_SOLUTIONS ? rejectPromiseSolution : rejectPromiseTpl

tap.test('returns a promise that rejects with Boo!', async (t) => {
  const promise = rejectPromise()
  t.type(promise, Promise, 'It returns a promise')
  try {
    await promise
    t.fail('This promise should have rejected')
  } catch (err) {
    console.log(err)
    t.equal(err, 'Boo!', 'Rejects with "Boo!"')
  }
})
