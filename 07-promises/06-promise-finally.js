/*

If you want to do something when a promise is settled (regardless if it is resolved or rejected)
you can use the finally() method

*/

class DBConnection {
  close () {
    // mock method
    console.log('Connection closed!')
  }
}

const connection = new DBConnection()

runQuery(connection, 'SELECT * FROM')
  .then((records) => {
    console.log(records)
  })
  .catch((err) => {
    console.error(err)
  })
  .finally(() => {
    // this block is executed regardless if the promise chain succeeds or fails
    connection.close()
  })

function runQuery (sql) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve(['Some', 'sample', 'records'])
    }

    reject(new Error('Error while querying'))
  })
}
