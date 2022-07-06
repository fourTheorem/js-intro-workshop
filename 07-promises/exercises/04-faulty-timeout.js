/*
  Exercise:

  Let's implement a `faultyTimeout(ms, seed)` function.

  This function receives two arguments:
    - `ms`: number of milliseconds to wait
    - `seed`: a value used to determine the behaviour of the timeout

  The function will returns a promise that resolves or rejects after `ms` milliseconds.

  If seed is bigger than 10, the promise will eventually reject with the string "Boom!"
  Otherwise the promise will eventually resolve with the string "OK!"

  Test your solution with:

  > npm run ex -- 07-promises/exercises/04-faulty-timeout.test.js
*/

export default function faultyTimeout (ms, seed) {
  // TODO
}
