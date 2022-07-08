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
