/*

Calling a callback-based function:

doSomethingAsync(arg1, arg2, arg3, cb)

The last argument is a "callback" function.

The callback function is called for us when the asynchronous operation is complete.

*/

// example of callback-based async function
function delay (milliseconds, cb) {
  setTimeout(cb, milliseconds)
}

delay(1000, () => console.log('I have waited 1 second just to say hello!'))
//          ^---- passing a callback here
