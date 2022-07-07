/* eslint no-unused-vars: "off" */

/*
  Exercise:

  You have a callback-based function called `roulette`.

  This function spins the roulette and returns a promise.

  This promise will resolve with the number the roulette ball landed on.

  Be careful! This function will reject if the ball accidentally escapes the wheel and falls outside!

  Write a function called `roulette` that promisifies the callback-based function.

  Test your solution with:

  > npm run ex -- 09-patterns/exercises/02-promisify.test.js
*/

function rouletteCb (escape, cb) {
  setTimeout(() => {
    if (escape) {
      return cb(new Error('The ball escaped the wheel!'))
    }

    const numbers = [
      0, 32, 15, 19, 4, 21, 2, 25, 17,
      34, 6, 27, 13, 36, 11, 30, 8, 23,
      10, 5, 24, 16, 33, 1, 20, 14, 31,
      9, 22, 18, 29, 7, 28, 12, 35, 3, 26
    ]

    const number = numbers[Math.floor(Math.random() * numbers.length)]
    cb(null, number)
  }, 1)
}

export default async function roulette (escape) {
  // Write your code here
  // call `rouletteCb(escape, cb)` and return a promise that tracks the async operation
}
