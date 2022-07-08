/*

Let's see how await can make our previous booking example much more readable.

In this exampole, we want to:

- get the latest booking for a given user
- If the booking exists, we want to cancel it
- If the booking was paid for, we want to refund the user

*/

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
