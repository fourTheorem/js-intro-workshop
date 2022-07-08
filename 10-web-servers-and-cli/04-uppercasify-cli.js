#!/usr/bin/env node
/*

In Node.js CLI scripts you can easily interact with STDIN and STDOUT.

- `process.stdin` is a readable stream that you can use to read data from standard input.
- `process.stdout` is a writable stream that you can use to write data to standard output.

The following script reads text from the standard input, uppercasifies and writes the resulting data to standard output.

Here we are using advanced streaming features. If you want to learn more about those check out: https://github.com/lmammino/streams-workshop

*/

import { Transform } from 'stream'
import { pipeline } from 'stream/promises'

process.stdin.setEncoding('utf8')

await pipeline(
  process.stdin,
  new Transform({
    transform (chunk, encoding, cb) {
      this.push(chunk.toString().toUpperCase())
      cb()
    }
  }),
  process.stdout
)

// make this script executable with:
// > chmod +x 10-web-servers-and-cli/04-uppercasify-cli.js
// Now if you want to use this script to "uppercasify" the entire book Moby Dick in real time:
// > curl -s https://www.gutenberg.org/files/2701/old/moby10b.txt | node 10-web-servers-and-cli/04-uppercasify-cli.js
