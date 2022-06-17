import { gzip } from 'zlib'
import { promisify } from 'util'

// zlib.gzip(buffer[, options], callback)

const gzipPromise = promisify(gzip)

const compressed = await gzipPromise(Buffer.from('Hello from Node.js'))
console.log(compressed) // <Buffer 1f 8b 08 00 00 00 00 ... 00 00 00>