/*
  But what happens when you use `await` inside an async function?

  We said an async function always returns a promise.

  The promise will be pending until the function completes (or throws an exception).
*/

async function typingEffect (text, msDelay) {
  for (const char of text) {
    process.stdout.write(char)
    await delay(msDelay) // <-- await can be used with regular control flow like loops or conditionals
  }
  process.stdout.write('\n')
}

await typingEffect('Hey Ma, looks like I\'m typing... with no hands!', 100)
console.log('Ok, done') // <- this will be printed only after the typing finishes, because we are awaiting the promise returned by `typingEffect`

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
