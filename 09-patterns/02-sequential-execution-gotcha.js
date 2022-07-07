/*
  Do not use Array.prototype.forEach for async sequential execution
*/

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
