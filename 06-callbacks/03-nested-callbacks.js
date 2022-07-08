/*

The problem with callbacks is that when you have to orchestrate multiple asynchronous operations, the code
can easily get messy...

In this example we are implementing a piece of functionality for an hotel booking system.

We want to:
  - get the latest booking for a given user
  - If the booking exists, we want to cancel it
  - If the booking was paid for, we want to refund the user

*/

import { getLatestBooking, cancelBooking, refundUser } from './_booking-utils.js'

const userId = 'Luciano'

getLatestBooking(userId, (err, booking) => {
  if (err) {
    console.error(err)
    return
  }

  if (booking) {
    console.log(`Found booking for user ${userId}`, booking)
    cancelBooking(booking.id, (err) => {
      if (err) {
        console.error(err)
        return
      }

      if (booking.paid) {
        console.log('Booking was paid, refunding the user')
        refundUser(userId, booking.paidAmount, (err) => {
          if (err) {
            console.error(err)
            return
          }

          console.log('User refunded')
        })
      }
    })
  } else {
    console.log(`No booking found for user ${userId}`)
  }
})
