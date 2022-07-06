/*
 Promises help to get rid of callback hell thanks to chaining
 but it can still be a bit tricky to orchestrate asynchronous workflows with optional steps.

  In this exampole, we want to:
   - get the latest booking for a given user
   - If the booking exists, we want to cancel it
   - If the booking was paid for, we want to refund the user
*/

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
