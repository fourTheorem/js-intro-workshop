/*

 With callbacks we are not in charge!
 We need to trust that the async function will call our callbacks when the async work is completed!

 Promise help us to be more in control!

 A promise is an object that represents the status of an asynchronous operation.
*/

const promiseObj = doSomethingAsync('arg1', 'arg2')
//    ^-- this is the promise object

console.log(promiseObj) // Promise { <pending> }

// A promise can have 2 states: pending and settled
// when it is settled it can be:
// - fulfilled (resolved)
// - rejected (error)

// a quick way to create a resolved promise is:
const resolved = Promise.resolve('🍀')
console.log(resolved) // Promise { '🍀' }

// a quick way to create a rejected promise is:
const rejected = Promise.reject('💩')
console.log(rejected) // Promise { <rejected> '💩' }

function doSomethingAsync (arg1, arg2) {
  return new Promise((resolve, reject) => {
    // do something async
    // when done, call resolve or reject
    setTimeout(() => resolve([arg1, arg2]), 1000)
  })
}
