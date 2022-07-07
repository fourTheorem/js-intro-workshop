<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 07. Promises

TODO:


## [`01-promise.js`](./01-promise.js)

With callbacks we are not in charge!
 We need to trust that the async function will call our callbacks when the async work is completed!

 Promise help us to be more in control!

 A promise is an object that represents the status of an asynchronous operation.

```js
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
```

Execute this example with:

```bash
node ./07-promises/01-promise.js
```


## [`02-promise-then.js`](./02-promise-then.js)

How do we know when a promise resolves or rejects?

 With the .then() and .catch() methods of a promise object

 Note that you can chain .then() and .catch() methods to the promise object!

```js
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
```

Execute this example with:

```bash
node ./07-promises/02-promise-then.js
```


## [`03-promise-chain.js`](./03-promise-chain.js)

If in a .then() block we return another promise, we are delegating
  the resolution (or the rejection) of the current promise to the new promise.

```js
delay(100)
  .then(() => {
    process.stdout.write('H')
    return delay(110)
  })
  .then(() => {
    process.stdout.write('E')
    return delay(100)
  })
  .then(() => {
    process.stdout.write('L')
    return delay(90)
  })
  .then(() => {
    process.stdout.write('L')
    return delay(80)
  })
  .then(() => {
    process.stdout.write('O')
    return delay(70)
  })
  .then(() => {
    process.stdout.write(' ')
    return delay(60)
  })
  .then(() => {
    process.stdout.write('W')
    return delay(50)
  })
  .then(() => {
    process.stdout.write('O')
    return delay(40)
  })
  .then(() => {
    process.stdout.write('R')
    return delay(30)
  })
  .then(() => {
    process.stdout.write('L')
    return delay(20)
  })
  .then(() => {
    process.stdout.write('D\n')
    return delay(10)
  })

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
```

Execute this example with:

```bash
node ./07-promises/03-promise-chain.js
```


## [`04-promise-chain-dynamic.js`](./04-promise-chain-dynamic.js)

calling .then() or .catch() on a promise returns a new promise,
  so we can create promise chains dynamically

```js
await animateText('Just because something doesn\'t do what you planned it to do doesn\'t mean it\'s useless. - Thomas Edison (Inventor)')

function animateText (text) {
  let animation = Promise.resolve()
  for (const char of text) {
    animation = animation.then(() => {
      process.stdout.write(char)
      return delay(100) // takes 100 ms to type a character
    })
  }
  animation = animation.then(() => process.stdout.write('\n'))
  return animation
}

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
```

Execute this example with:

```bash
node ./07-promises/04-promise-chain-dynamic.js
```


## [`05-promise-chain-catch.js`](./05-promise-chain-catch.js)

In this example we chain 3 promises together.
  Anyone of these promises can fail.
  The final catch block will capture any rejection in the chain.
  This gives us an easy way to handle errors without code duplication.

```js
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
```

Execute this example with:

```bash
node ./07-promises/05-promise-chain-catch.js
```


## [`06-promise-finally.js`](./06-promise-finally.js)

if you want to do something when a promise is settled (regardless if it is resolved or rejected)
  you can use the finally() method

```js
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
```

Execute this example with:

```bash
node ./07-promises/06-promise-finally.js
```


## [`07-promise-orchestration.js`](./07-promise-orchestration.js)

Promises help to get rid of callback hell thanks to chaining
 but it can still be a bit tricky to orchestrate asynchronous workflows with optional steps.

  In this exampole, we want to:
   - get the latest booking for a given user
   - If the booking exists, we want to cancel it
   - If the booking was paid for, we want to refund the user

```js
import { getLatestBooking, cancelBooking, refundUser } from './booking-utils.js'

const userId = 'Luciano'

getLatestBooking(userId)
  .then((booking) => {
    if (booking) {
      console.log(`Found booking for user ${userId}`, booking)
      return cancelBooking(booking.id)
    }
  })
  .then((cancelledBooking) => {
    if (cancelledBooking && cancelledBooking.paid) { // needs to check what happened in the previous step, also data needs to be propagate globally or through the promise
      console.log('Booking was paid, refunding the user')
      return refundUser(userId, cancelledBooking.paidAmount)
    }
  })
  .then((refund) => {
    if (refund) { // another check
      console.log('User refunded')
    }
  })
  .catch((err) => {
    console.error(err)
  })
```

Execute this example with:

```bash
node ./07-promises/07-promise-orchestration.js
```


## [`booking-utils.js`](./booking-utils.js)



```js
// simulated functions.
// In real life these functions would be using some data storage to fetch the data

const booking = {
  id: '123',
  paid: true,
  paidAmount: 100
}

export function getLatestBooking (userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(booking), 500)
  })
}

export function cancelBooking (bookingId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(booking), 500)
  })
}

export function refundUser (userId, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(booking.paidAmount), 500)
  })
}
```

Execute this example with:

```bash
node ./07-promises/booking-utils.js
```


---


| [⬅️ 06-callbacks](/06-callbacks/README.md) | [🏠](/README.md) | [08-async-await ➡️](/08-async-await/README.md) |
|:------------------------------------------|:---------------:|----------------------------------------------:|

