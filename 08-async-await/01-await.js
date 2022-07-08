/*

Sometimes we just want to wait for a promise to resolve before executing the next line.

The `await` keyword allows us to do exactly that!

*/

const promiseObj = doSomethingAsync()
const data = await promiseObj // <-- when we await we are also "unwrapping" the value resolved by the promise

console.log(data) // 'some data'   <-- this line won't be executed until the promise resolves

// we can also write everything as a one-liner:
console.log(await doSomethingAsync()) // 'some data'

function doSomethingAsync () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('some data')
    }, 1000)
  })
}
