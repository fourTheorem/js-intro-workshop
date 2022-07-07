/*
  Await is just one part of the story.

  We also have async.

  Async is a keyword that can be used in front of a function definiton.
  It gives a function a new meaning: it always returns a promise!
*/

async function doSomethingAsync () {
  return 'some data'
}

// this is equivalent to:

function doSomethingAsyncWithPromises () {
  return Promise.resolve('some data')
}

console.log(await doSomethingAsync()) // 'some data'
console.log(await doSomethingAsyncWithPromises()) // 'some data'

// similarly, if an async function throws an error, it behaves like returning a rejected promise.

async function failAsync () {
  throw new Error('👻 💣')
}

// this is equivalent to:

function failAsyncWithPromises () {
  return Promise.reject(new Error('👻 💣'))
}

try {
  await failAsync()
} catch (err) {
  console.error(err.message) // '👻 💣'
}

try {
  await failAsyncWithPromises()
} catch (err) {
  console.error(err.message) // '👻 💣'
}
