/* eslint no-unused-vars: "off" */

/*
  Exercise:

  Write a function that can delete multiple records from a database.
  The function accepts a database connection object and a list of ids.

  For every id in the list you should call `db.delete(id)` to try to delete the record.
  Unfortunately the database is sometimes under pressure and it might reject the query.
  In this case you should retry the operation until it succeeds.

  Make sure to delete all the records, retrying as needed.

  Test your solution with:

  > npm run ex -- 09-patterns/exercises/01-faulty-connection.test.js
*/

export default async function deleteRecords (db, ids) {
  // Write your code here
  // call db.delete(id) for every id in ids
  // this function will return a promise.
  // if the promise reject, retry the same operation until it succeeds
}
