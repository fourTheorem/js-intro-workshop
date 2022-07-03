import tap from 'tap'
import esmock from 'esmock'

const modulePath = process.env.TEST_SOLUTIONS ? './01-file-bomber.solution.js' : './01-file-bomber.js'

tap.test('It bombs a file', async t => {
  let writtenContent = null
  let writtenPath = null

  const fileBomber = await esmock(modulePath, {
    fs: {
      stat: (path, cb) => {
        cb(null, {
          isFile: () => true
        })
      },
      writeFile: (path, content, cb) => {
        writtenPath = path
        writtenContent = content
        cb(null, null)
      }
    }
  })

  return new Promise((resolve, reject) => {
    try {
      fileBomber('somefile.txt', (err, result) => {
        t.equal(err, null, 'no error returned')
        t.equal(result, 'bombed', 'content is "bombed"')
        t.equal(writtenPath, 'somefile.txt', 'wrote to the correct file')
        t.equal(writtenContent, '💣', 'wrote the correct content')
        resolve()
      })
    } catch (err) {
      reject(err)
    }
  })
})

tap.test('It does not bomb a path that is not a file', async t => {
  let writtenContent = null
  let writtenPath = null

  const fileBomber = await esmock(modulePath, {
    fs: {
      stat: (path, cb) => {
        cb(null, {
          isFile: () => false
        })
      },
      writeFile: (path, content, cb) => {
        writtenPath = path
        writtenContent = content
        cb(null, null)
      }
    }
  })

  return new Promise((resolve, reject) => {
    try {
      fileBomber('somefile.txt', (err, result) => {
        t.equal(err, null, 'no error returned')
        t.equal(result, 'not bombed', 'content is "not bombed"')
        t.same([writtenPath, writtenContent], [null, null], 'Did not write anything')
        resolve()
      })
    } catch (err) {
      reject(err)
    }
  })
})

tap.test('It propagates stat errors', async t => {
  let writtenContent = null
  let writtenPath = null
  const expectedError = new Error('Cannot stat path')

  const fileBomber = await esmock(modulePath, {
    fs: {
      stat: (path, cb) => {
        cb(expectedError, null)
      },
      writeFile: (path, content, cb) => {
        writtenPath = path
        writtenContent = content
        cb(null, null)
      }
    }
  })

  return new Promise((resolve, reject) => {
    try {
      fileBomber('somefile.txt', (err, result) => {
        t.equal(err, expectedError, 'error propagated correctly')
        t.notOk(result, 'result is undefined or null')
        t.same([writtenPath, writtenContent], [null, null], 'Did not write anything')
        resolve()
      })
    } catch (err) {
      reject(err)
    }
  })
})

tap.test('It propagates writeFile errors', async t => {
  let writtenContent = null
  let writtenPath = null
  const expectedError = new Error('Cannot write to path')

  const fileBomber = await esmock(modulePath, {
    fs: {
      stat: (path, cb) => {
        cb(null, {
          isFile: () => true
        })
      },
      writeFile: (path, content, cb) => {
        writtenPath = path
        writtenContent = content
        cb(expectedError)
      }
    }
  })

  return new Promise((resolve, reject) => {
    try {
      fileBomber('somefile.txt', (err, result) => {
        t.equal(err, expectedError, 'error propagated correctly')
        t.notOk(result, 'result is undefined or null')
        t.same([writtenPath, writtenContent], ['somefile.txt', '💣'], 'Did try to write the correct content to the correct file')
        resolve()
      })
    } catch (err) {
      reject(err)
    }
  })
})
