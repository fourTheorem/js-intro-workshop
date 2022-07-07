/*
  What if you have to use a callback based function, but you'd rather use a promise?

  Node.js offers some "promisified" versions of callback-based functions.

  For instance:

  - `setTimeout`, `setImmediate`, `setInterval` -> `import timers from 'timers/promises'`
  - `import fs from 'fs'` -> `import fs from 'fs/promises'`
  - `import stream from 'stream'` -> `import stream from 'stream/promises'`
  - `import dns from 'dns'` -> `import dns from 'dns/promises'`

  But what if we want to use a callback-based function that does not have a promise-based version yet?

  We can "promisify" it by ourselves!

  Let's promisify `zlib.gzip` which looks like this:

  ```plain
  zlib.gzip(buffer[, options], callback)
  ```

  We can do that by using the `promisify` function from the `util` module.
*/

import { gzip } from 'zlib'
import { promisify } from 'util'

const gzipPromise = promisify(gzip) // this returns a "promisified" version of the original function

const compressed = await gzipPromise(Buffer.from('Hello from Node.js'))
console.log(compressed) // <Buffer 1f 8b 08 00 00 00 00 ... 00 00 00>
