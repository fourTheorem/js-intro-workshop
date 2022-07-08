/*

Calling `.then()` or `.catch()` on a promise returns a new promise,
so we can create promise chains dynamically

*/

await animateText('Just because something doesn\'t do what you planned it to do doesn\'t mean it\'s useless. - Thomas Edison (Inventor)')

function animateText (text) {
  let animation = Promise.resolve()
  for (const char of text) {
    animation = animation.then(() => {
      process.stdout.write(char)
      return delay(100) // takes 100 ms to type a character
    })
  }
  animation = animation.then(() => process.stdout.write('\n'))
  return animation
}

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
