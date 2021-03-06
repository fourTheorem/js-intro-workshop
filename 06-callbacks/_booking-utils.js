// simulated functions.
// In real life these functions would be using some data storage to fetch the data

export function getLatestBooking (userId, cb) {
  const booking = {
    id: '123',
    paid: true,
    paidAmount: 100
  }
  setTimeout(() => cb(null, booking), 500)
}

export function cancelBooking (bookingId, cb) {
  setTimeout(() => cb(null), 500)
}

export function refundUser (userId, amount, cb) {
  setTimeout(() => cb(null), 500)
}
