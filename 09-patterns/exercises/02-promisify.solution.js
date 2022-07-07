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
  return new Promise((resolve, reject) => {
    rouletteCb(escape, (err, number) => {
      if (err) {
        return reject(err)
      }

      resolve(number)
    })
  })
}
