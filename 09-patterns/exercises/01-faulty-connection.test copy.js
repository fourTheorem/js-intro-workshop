import tap from 'tap'
import sinon from 'sinon'

import deleteRecordsSolution from './01-faulty-connection.solution.js'
import deleteRecordsTpl from './01-faulty-connection.js'

const deleteRecords = process.env.TEST_SOLUTIONS ? deleteRecordsSolution : deleteRecordsTpl

tap.test('It deletes all the records', async (t) => {
  const db = { delete (id) {} }
  const dbMock = sinon.mock(db)

  dbMock.expects('delete').once().withArgs(1).resolves(true)
  dbMock.expects('delete').once().withArgs(2).resolves(true)
  dbMock.expects('delete').once().withArgs(3).resolves(true)
  dbMock.expects('delete').once().withArgs(4).resolves(true)

  await deleteRecords(db, [1, 2, 3, 4])

  dbMock.verify()
})

tap.test('It handles retries correctly', async (t) => {
  const db = { delete (id) {} }
  const dbMock = sinon.mock(db)

  dbMock.expects('delete').once().withArgs(1).resolves(true)
  dbMock.expects('delete').once().withArgs(2).rejects(new Error('faulty')) // fails once
  dbMock.expects('delete').once().withArgs(2).resolves(true)
  dbMock.expects('delete').once().withArgs(3).resolves(true)
  dbMock.expects('delete').once().withArgs(4).rejects(new Error('faulty'))
  dbMock.expects('delete').once().withArgs(4).rejects(new Error('faulty')) // fails twice
  dbMock.expects('delete').once().withArgs(4).resolves(true)

  await deleteRecords(db, [1, 2, 3, 4])

  dbMock.verify()
})
