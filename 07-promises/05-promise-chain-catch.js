/*
  In this example we chain 3 promises together.
  Anyone of these promises can fail.
  The final catch block will capture any rejection in the chain.
  This gives us an easy way to handle errors without code duplication.
*/

doSomethingOrFail() // shot 1
  .then(() => {
    console.log('✅  1/3')
    return doSomethingOrFail() // shot 2
  })
  .then(() => {
    console.log('✅  2/3')
    return doSomethingOrFail() // shot 3
  })
  .then(() => {
    console.log('✅  3/3  (WIN 🎉)')
  })
  .catch((err) => { // This will catch any error in the chain
    console.log('❌  (FAIL)')
    console.error(err.message)
  })

function doSomethingOrFail () {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve()
    }
    return reject(new Error('Unlucky shot'))
  })
}
