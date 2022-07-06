import tap from 'tap'
import esmock from 'esmock'

const modulePath = process.env.TEST_SOLUTIONS ? './05-file-bomber.solution.js' : './05-file-bomber.js'

tap.test('It bombs a file', async t => {
  let writtenContent = null
  let writtenPath = null

  const fileBomber = await esmock(modulePath, {
    'fs/promises': {
      stat: (path) => Promise.resolve({ isFile: () => true }),
      writeFile: (path, content) => {
        writtenPath = path
        writtenContent = content
        return Promise.resolve(null)
      }
    }
  })

  const result = await fileBomber('somefile.txt')
  t.equal(result, 'bombed', 'content is "bombed"')
  t.equal(writtenPath, 'somefile.txt', 'wrote to the correct file')
  t.equal(writtenContent, '💣', 'wrote the correct content')
})

tap.test('It does not bomb a path that is not a file', async t => {
  let writtenContent = null
  let writtenPath = null

  const fileBomber = await esmock(modulePath, {
    'fs/promises': {
      stat: (path) => Promise.resolve({ isFile: () => false }),
      writeFile: (path, content) => {
        writtenPath = path
        writtenContent = content
        return Promise.resolve(null)
      }
    }
  })

  const result = await fileBomber('somefile.txt')
  t.equal(result, 'not bombed', 'content is "not bombed"')
  t.same([writtenPath, writtenContent], [null, null], 'Did not write anything')
})

tap.test('It propagates stat errors', async t => {
  let writtenContent = null
  let writtenPath = null
  const expectedError = new Error('Cannot stat path')

  const fileBomber = await esmock(modulePath, {
    'fs/promises': {
      stat: (path) => Promise.reject(expectedError),
      writeFile: (path, content) => {
        writtenPath = path
        writtenContent = content
        return Promise.resolve(null)
      }
    }
  })

  try {
    await fileBomber('somefile.txt')
    t.fail('fileBomber returned promise did not reject in case of error')
  } catch (err) {
    t.equal(err, expectedError, 'error propagated correctly')
  } finally {
    t.same([writtenPath, writtenContent], [null, null], 'Did not write anything')
  }
})

tap.test('It propagates writeFile errors', async t => {
  let writtenContent = null
  let writtenPath = null
  const expectedError = new Error('Cannot write to path')

  const fileBomber = await esmock(modulePath, {
    'fs/promises': {
      stat: (path) => Promise.resolve({ isFile: () => true }),
      writeFile: (path, content) => {
        writtenPath = path
        writtenContent = content
        return Promise.reject(expectedError)
      }
    }
  })

  try {
    await fileBomber('somefile.txt')
    t.fail('fileBomber returned promise did not reject in case of error')
  } catch (err) {
    t.equal(err, expectedError, 'error propagated correctly')
  } finally {
    t.same([writtenPath, writtenContent], ['somefile.txt', '💣'], 'Did try to write the correct content to the correct file')
  }
})
