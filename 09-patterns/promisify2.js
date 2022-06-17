import { gzip } from 'zlib' // zlib.gzip(buffer[, options], callback)

function gzipPromise (buffer, options) {
  return new Promise((resolve, reject) => {
    gzip(buffer, options, (err, gzippedData) => {
      if (err) {
        return reject(err)
      }

      resolve(gzippedData)
    })
  })
}

const compressed = await gzipPromise(Buffer.from('Hello from Node.js'))
console.log(compressed) // <Buffer 1f 8b 08 00 00 00 00 ... 00 00 00>