/*

How do we know when a promise resolves or rejects?

With the `.then()` and `.catch()` methods of a promise object

Note that you can chain `.then()` and `.catch()` methods to the promise object!

*/

doSomethingOrFail()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log('ops this time it failed')
    console.error(err)
  })

function doSomethingOrFail () {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve('🍀 Lucky shot')
    }
    return reject(new Error('Unlucky shot'))
  })
}
