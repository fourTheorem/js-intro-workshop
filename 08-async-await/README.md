<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 08. Async/Await

TODO:


## [`01-await.js`](./01-await.js)

Sometimes we just want to wait for a promise to resolve before executing the next line.

The `await` keyword allows us to do exactly that!

```js
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
```

> Execute this example with:
>
> ```bash
> node ./08-async-await/01-await.js
> ```


## [`02-await-try-catch.js`](./02-await-try-catch.js)

But what if the promise rejects?

When using await rejections will be propagated (thrown) as synchronous exceptions, so we
can capture them using a `try/catch` block.

This allows us to uniform error handling across syncrhonous and asynchronous code!

```js
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
```

> Execute this example with:
>
> ```bash
> node ./08-async-await/02-await-try-catch.js
> ```


## [`03-async-function.js`](./03-async-function.js)

Await is just one part of the story.

We also have async.

Async is a keyword that can be used in front of a function definiton.
It gives a function a new meaning: it always returns a promise!

```js
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
```

> Execute this example with:
>
> ```bash
> node ./08-async-await/03-async-function.js
> ```


## [`04-async-await.js`](./04-async-await.js)

But what happens when you use `await` inside an async function?

We said an async function always returns a promise.

The promise will be pending until the function completes (or throws an exception).

```js
async function typingEffect (text, msDelay) {
  for (const char of text) {
    process.stdout.write(char)
    await delay(msDelay) // <-- await can be used with regular control flow like loops or conditionals
  }
  process.stdout.write('\n')
}

await typingEffect('Hey Ma, looks like I\'m typing... with no hands!', 100)
console.log('Ok, done') // <- this will be printed only after the typing finishes, because we are awaiting the promise returned by `typingEffect`

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
```

> Execute this example with:
>
> ```bash
> node ./08-async-await/04-async-await.js
> ```


## [`05-async-await-orchestration.js`](./05-async-await-orchestration.js)

Let's see how await can make our previous booking example much more readable.

In this exampole, we want to:

- get the latest booking for a given user
- If the booking exists, we want to cancel it
- If the booking was paid for, we want to refund the user

```js
import { getLatestBooking, cancelBooking, refundUser } from './_booking-utils.js'

async function cancelLastBooking (userId) {
  const booking = await getLatestBooking(userId)

  if (!booking) {
    console.log(`No booking found for user ${userId}`)
    return // <-- this will complete the execution of the function and make the promise resolve
  }

  console.log(`Found booking for user ${userId}:`, booking)
  await cancelBooking(booking.id)

  if (booking.paid) {
    console.log('Booking was paid, refunding the user')
    await refundUser(userId, booking.paidAmount)
    console.log(`User refunded (${booking.paidAmount})`)
  }
}

await cancelLastBooking('Luciano')
```

> Execute this example with:
>
> ```bash
> node ./08-async-await/05-async-await-orchestration.js
> ```


---


| [⬅️ 07-promises](/07-promises/README.md) | [🏠](/README.md) | [09-async-patterns ➡️](/09-async-patterns/README.md) |
|:----------------------------------------|:---------------:|----------------------------------------------------:|

