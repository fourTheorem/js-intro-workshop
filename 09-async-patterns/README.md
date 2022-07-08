<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 03. Async Patterns

TODO:


## [`01-sequential-execution.js`](./01-sequential-execution.js)

If you want to execute multiple asynchronous operations in sequence you can simply use a loop and `await`

```js
const users = ['Peach', 'Toad', 'Mario', 'Luigi']

for (const userId of users) {
  await cancelLatestBooking(userId)
  console.log(`Cancelled booking for user ${userId}`)
}

function cancelLatestBooking (userId) {
  return new Promise((resolve) => setTimeout(resolve, 500))
}

// This will output:
// Cancelled booking for user Peach
// Cancelled booking for user Toad
// Cancelled booking for user Mario
// Cancelled booking for user Luigi
```

> Execute this example with:
>
> ```bash
> node ./09-async-patterns/01-sequential-execution.js
> ```


## [`02-sequential-execution-gotcha.js`](./02-sequential-execution-gotcha.js)

Do not use Array.prototype.forEach for async sequential execution

```js
const users = ['Peach', 'Toad', 'Mario', 'Luigi']

users.forEach(async (userId) => {
  await cancelLatestBooking(userId)
  console.log(`Cancelled booking for user ${userId}`)
})

function cancelLatestBooking (userId) {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 500))
}

// This will output the items in random order, all in one go!

// IMPORTANT: forEach does not wait for the promise to resolve before executing the next iteration!
// It just calls the function for every item one after the other!
// The same happens if you use Array.prototype.map() and similar methods
```

> Execute this example with:
>
> ```bash
> node ./09-async-patterns/02-sequential-execution-gotcha.js
> ```


## [`03-concurrent-execution.js`](./03-concurrent-execution.js)

What if you want to execute multiple async operations concurrently?

You could use `Promise.all(...promises)`.

`Promise.all()` receives a list of promises and it returns a new Promise.

This promise will resolve when all the promises in the list resolve,
but it rejects as soon as ONE of the promises rejects!

```js
const users = ['Peach', 'Toad', 'Mario', 'Luigi']

await Promise.all(
  users.map(
    userId => cancelLatestBooking(userId)
  )
)

function cancelLatestBooking (userId) {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 500))
}

// What happens to the other promises when one rejects?!
```

> Execute this example with:
>
> ```bash
> node ./09-async-patterns/03-concurrent-execution.js
> ```


## [`04-concurrent-execution-all-settled.js`](./04-concurrent-execution-all-settled.js)

What happens to the other promises when one rejects?!

They keep going!

So the other promises might just succeed or fail, hard to tell!

But what if we want to know and maybe retry the failed ones?

We can use `Promise.allSettled(...promises)`!

Promise.allSettled() receives a list of promises and it returns a new Promise.

The promise will settle only when all the promises in the list settle (either reject or resolve).

The promise will always resolve with an array of objects, each object representing a promise in the list.

```js
const users = ['Peach', 'Toad', 'Mario', 'Luigi']

const results = await Promise.allSettled(
  users.map(
    userId => cancelLatestBooking(userId)
  )
)

console.log(results)

// This will print something like:
// [
//   { status: 'fulfilled', value: true },
//   { status: 'fulfilled', value: true },
//   { status: 'fulfilled', value: true },
//   {
//     status: 'rejected',
//     reason: Error: Failed to cancel booking
//         at Timeout._onTimeout (file:///.../js-intro-workshop/09-patterns/04-concurrent-execution-all-settled.js:38:16)
//         at listOnTimeout (node:internal/timers:559:17)
//         at processTimers (node:internal/timers:502:7)
//   }
// ]

function cancelLatestBooking (userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(true)
      } else {
        reject(new Error('Failed to cancel booking'))
      }
    }, 100)
  })
}
```

> Execute this example with:
>
> ```bash
> node ./09-async-patterns/04-concurrent-execution-all-settled.js
> ```


## [`05-promisify1.js`](./05-promisify1.js)

What if you have to use a callback based function, but you'd rather use a promise?

Node.js offers some "promisified" versions of callback-based functions.

For instance:

- `setTimeout`, `setImmediate`, `setInterval` -> `import timers from 'timers/promises'`
- `import fs from 'fs'` -> `import fs from 'fs/promises'`
- `import stream from 'stream'` -> `import stream from 'stream/promises'`
- `import dns from 'dns'` -> `import dns from 'dns/promises'`

But what if we want to use a callback-based function that does not have a promise-based version yet?

We can "promisify" it by ourselves!

Let's promisify `zlib.gzip` which looks like this:

```plain
zlib.gzip(buffer[, options], callback)
```

We can do that by using the `promisify` function from the `util` module.

```js
import { gzip } from 'zlib'
import { promisify } from 'util'

const gzipPromise = promisify(gzip) // this returns a "promisified" version of the original function

const compressed = await gzipPromise(Buffer.from('Hello from Node.js'))
console.log(compressed) // <Buffer 1f 8b 08 00 00 00 00 ... 00 00 00>
```

> Execute this example with:
>
> ```bash
> node ./09-async-patterns/05-promisify1.js
> ```


## [`06-promisify2.js`](./06-promisify2.js)

But what if we are in an environment that does not have the `promisify` utility (e.g. the browser)?

How hard can it be to promisify a function?

```js
import { gzip } from 'zlib' // zlib.gzip(buffer[, options], callback)

function gzipPromise (buffer, options) { // 1. we don't accept a callback here
  return new Promise((resolve, reject) => { // 2. we return a promise
    gzip(buffer, options, (err, gzippedData) => { // 3. we call the original callback-based function
      if (err) {
        return reject(err) // 4. if it fails, we reject the promise
      }

      resolve(gzippedData) // 5. otherwise we resolve the promise with the data from the callback
    })
  })
}

const compressed = await gzipPromise(Buffer.from('Hello from Node.js'))
console.log(compressed) // <Buffer 1f 8b 08 00 00 00 00 ... 00 00 00>
```

> Execute this example with:
>
> ```bash
> node ./09-async-patterns/06-promisify2.js
> ```


## [`07-callbackify1.js`](./07-callbackify1.js)

This is a bit of a rare use case, but it happens sometimes...

What if we have written a promise-based function, but we have to pass it in a context
that accepts a callback-based function instead?

We need to "callbackify" our function!

There is a utility for that called `callbackify` from the `util` package.

```js
import { callbackify } from 'util'
import Innertube from 'youtubei.js' // from npm

// promise-based function that we want to callbackify
async function videoTitleFilter (videoId) {
  const youtube = await new Innertube({ gl: 'US' })
  const details = await youtube.getDetails(videoId)
  return details.title
}

// uses callbackify to get a callbackified version of the original function
const videoTitleFilterCb = callbackify(videoTitleFilter)

// call it using a callback!
videoTitleFilterCb('18y6OjdeR6o', (err, videoTitle) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(videoTitle)
})
```

> Execute this example with:
>
> ```bash
> node ./09-async-patterns/07-callbackify1.js
> ```


## [`08-callbackify2.js`](./08-callbackify2.js)

Can we do the same ourselves without using the utility function by Node.js?

```js
import Innertube from 'youtubei.js' // from npm

async function videoTitleFilter (videoId) {
  const youtube = await new Innertube({ gl: 'US' })
  const details = await youtube.getDetails(videoId)
  return details.title
}

function videoTitleFilterCb (videoId, cb) { // 1. copy the signature of the original function and add a callback at the end
  videoTitleFilter(videoId) // 2. call the original function wich will return a promise
    .then((videoTitle) => cb(null, videoTitle)) // 3. when the promise resolves, we call the callback with the data
    .catch(cb) // 4. if the promise rejects we call the callback with the error
  // note: the above is a shorthand for `.catch(err => cb(err))`
}

videoTitleFilterCb('18y6OjdeR6o', (err, videoTitle) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(videoTitle)
})
```

> Execute this example with:
>
> ```bash
> node ./09-async-patterns/08-callbackify2.js
> ```


---


| [⬅️ 08-async-await](/08-async-await/README.md) | [🏠](/README.md) | [10-web-servers-and-cli ➡️](/10-web-servers-and-cli/README.md) |
|:----------------------------------------------|:---------------:|--------------------------------------------------------------:|

