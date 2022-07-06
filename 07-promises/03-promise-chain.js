/*
  If in a .then() block we return another promise, we are delegating
  the resolution (or the rejection) of the current promise to the new promise.
*/

delay(100)
  .then(() => {
    process.stdout.write('H')
    return delay(110)
  })
  .then(() => {
    process.stdout.write('E')
    return delay(100)
  })
  .then(() => {
    process.stdout.write('L')
    return delay(90)
  })
  .then(() => {
    process.stdout.write('L')
    return delay(80)
  })
  .then(() => {
    process.stdout.write('O')
    return delay(70)
  })
  .then(() => {
    process.stdout.write(' ')
    return delay(60)
  })
  .then(() => {
    process.stdout.write('W')
    return delay(50)
  })
  .then(() => {
    process.stdout.write('O')
    return delay(40)
  })
  .then(() => {
    process.stdout.write('R')
    return delay(30)
  })
  .then(() => {
    process.stdout.write('L')
    return delay(20)
  })
  .then(() => {
    process.stdout.write('D\n')
    return delay(10)
  })

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
