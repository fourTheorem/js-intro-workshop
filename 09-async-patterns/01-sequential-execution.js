/*

If you want to execute multiple asynchronous operations in sequence you can simply use a loop and `await`

*/

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
