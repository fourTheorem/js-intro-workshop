/*
  What happens to the other promises when one rejects?!

  They keep going!

  So the other promises might just succeed or fail, hard to tell!

  But what if we want to know and maybe retry the failed ones?

  We can use `Promise.allSettled(...promises)`!

  Promise.allSettled() receives a list of promises and it returns a new Promise.

  The promise will settle only when all the promises in the list settle (either reject or resolve).

  The promise will always resolve with an array of objects, each object representing a promise in the list.
*/

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
