/**
  Callback-based functions generally call their callback function with 2 arguments:

    - err: an error object, if any
    - result: the result of the operation, if successful

  So, when we write a callback we always need to check for errors first.
*/

function fiftyFiftyFailure (cb) {
  if (Math.random() > 0.5) {
    return cb(new Error('It failed!'))
  }

  return cb(null, 'It worked!')
}

fiftyFiftyFailure((err, result) => {
  // handle error
  if (err) {
    console.error(err)
    process.exit(1) // terminates the process with 1 as error code
  }

  // if no error, do something with the result
  console.log(result)
})
