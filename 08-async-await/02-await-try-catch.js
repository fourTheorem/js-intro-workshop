/*
  But what if the promise rejects?

  When using await rejections will be propagated (thrown) as synchronous exceptions, so we
  can capture them using a try/catch block.

  This allows us to uniform error handling across syncrhonous and asynchronous code!
*/

try {
  const data = await doSomethingAsyncThatActuallyFails()
  console.log(data) // <- this won't be executed if the promise rejects
} catch (err) {
  console.log('Oooopsie...')
  console.error(err)
}

function doSomethingAsyncThatActuallyFails () {
  return Promise.reject('Ops I did it again!')
}
