/*

What if you want to execute multiple async operations concurrently?

You could use `Promise.all(...promises)`.

`Promise.all()` receives a list of promises and it returns a new Promise.

This promise will resolve when all the promises in the list resolve,
but it rejects as soon as ONE of the promises rejects!

*/

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
