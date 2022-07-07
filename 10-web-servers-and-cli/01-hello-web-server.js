/*
  With Node.js is very easy to create web servers.

  You can do that without having to install a web framework.

  Simply use the `http` (or `https`) package.
*/

import { createServer } from 'http'

const server = createServer((req, res) => {
  // req is a ReadableStream representing the request object
  // res is a WritableStream that allows us to send a response to the client
  console.log(`Received: ${req.method} ${req.url}`)
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World\n')
})
server.listen(8000)

// use this with `curl` to test the server:
// Start the server with:
// > node 10-web-servers-and-cli/01-hello-web-server.js
// Then in another terminal window:
// > curl -X GET http://localhost:8000/some/random/path
