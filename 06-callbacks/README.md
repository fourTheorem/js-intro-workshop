<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 06. Callbacks

TODO:


## [`01-callback.js`](./01-callback.js)

Calling a callback-based function:

  doSomethingAsync(arg1, arg2, arg3, cb)

  The last argument is a "callback" function.

  The callback function is called for us when the asynchronous operation is complete.

```js
// example of callback-based async function
function delay (milliseconds, cb) {
  setTimeout(cb, milliseconds)
}

delay(1000, () => console.log('I have waited 1 second just to say hello!'))
//          ^---- passing a callback here
```

Execute this example with:

```bash
node ./06-callbacks/01-callback.js
```


## [`02-callback-errors.js`](./02-callback-errors.js)



```js
/**
  Callback-based functions generally call their callback function with 2 arguments:

    - err: an error object, if any
    - result: the result of the operation, if successful

  So, when we write a callback we always need to check for errors first.
*/

function fiftyFiftyFailure (cb) {
  if (Math.random() > 0.5) {
    return cb(new Error('It failed!'))
  }

  return cb(null, 'It worked!')
}

fiftyFiftyFailure((err, result) => {
  // handle error
  if (err) {
    console.error(err)
    process.exit(1) // terminates the process with 1 as error code
  }

  // if no error, do something with the result
  console.log(result)
})
```

Execute this example with:

```bash
node ./06-callbacks/02-callback-errors.js
```


## [`03-nested-callbacks.js`](./03-nested-callbacks.js)

The problem with callbacks is that when you have to orchestrate multiple asynchronous operations, the code
 can easily get messy...

  In this example we are implementing a piece of functionality for an hotel booking system.

  We want to:
   - get the latest booking for a given user
   - If the booking exists, we want to cancel it
   - If the booking was paid for, we want to refund the user

```js
import { getLatestBooking, cancelBooking, refundUser } from './booking-utils.js'

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
```

Execute this example with:

```bash
node ./06-callbacks/03-nested-callbacks.js
```


## [`booking-utils.js`](./booking-utils.js)



```js
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
```

Execute this example with:

```bash
node ./06-callbacks/booking-utils.js
```


---


| [⬅️ 05-typescript](/05-typescript/README.md) | [🏠](/README.md) | [07-promises ➡️](/07-promises/README.md) |
|:--------------------------------------------|:---------------:|----------------------------------------:|

