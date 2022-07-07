async function retryUntilSucceeds (fn) {
  try {
    await fn()
  } catch (err) {
    return retryUntilSucceeds(fn)
  }
}

export default async function deleteRecords (db, ids) {
  return Promise.all(ids.map(id => retryUntilSucceeds(() => db.delete(id))))
}
