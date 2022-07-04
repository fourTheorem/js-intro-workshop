import tap from 'tap'

import resolvePromiseSolution from './01-resolve-promise.solution.js'
import resolvePromiseTpl from './01-resolve-promise.js'

const resolvePromise = process.env.TEST_SOLUTIONS ? resolvePromiseSolution : resolvePromiseTpl

tap.test('returns a promise', async (t) => {
  const promise = resolvePromise('hello')

  t.type(promise, Promise)
})

tap.test('resolves the value', async (t) => {
  const value = 'chicken'

  return resolvePromise(value)
    .then(response => {
      t.equal(response, value)
    })
})
