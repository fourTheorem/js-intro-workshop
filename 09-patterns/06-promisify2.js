/*
  But what if we are in an environment that does not have the `promisify` utility (e.g. the browser)?

  How hard can it be to promisify a function?
*/

import { gzip } from 'zlib' // zlib.gzip(buffer[, options], callback)

function gzipPromise (buffer, options) { // 1. we don't accept a callback here
  return new Promise((resolve, reject) => { // 2. we return a promise
    gzip(buffer, options, (err, gzippedData) => { // 3. we call the original callback-based function
      if (err) {
        return reject(err) // 4. if it fails, we reject the promise
      }

      resolve(gzippedData) // 5. otherwise we resolve the promise with the data from the callback
    })
  })
}

const compressed = await gzipPromise(Buffer.from('Hello from Node.js'))
console.log(compressed) // <Buffer 1f 8b 08 00 00 00 00 ... 00 00 00>
