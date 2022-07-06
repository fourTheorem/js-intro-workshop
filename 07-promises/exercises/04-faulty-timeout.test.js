import tap from 'tap'

import faultyTimeoutSolution from './04-faulty-timeout.solution.js'
import faultyTimeoutTpl from './04-faulty-timeout.js'

const faultyTimeout = process.env.TEST_SOLUTIONS ? faultyTimeoutSolution : faultyTimeoutTpl

tap.test('Resolves with OK! with a seed <= 10', async (t) => {
  const result = await faultyTimeout(1, 5)
  t.equal(result, 'OK!', 'Resolves with OK! with seed=5')
  const result2 = await faultyTimeout(1, 10)
  t.equal(result2, 'OK!', 'Resolves with OK! with seed=10')
})

tap.test('Rejects with Boom! with a seed > 10', async (t) => {
  try {
    await faultyTimeout(1, 11)
    t.fail('The function did not reject')
  } catch (err) {
    t.equal(err, 'Boom!', 'Rejects with Boom! with seed=11')
  }
})
