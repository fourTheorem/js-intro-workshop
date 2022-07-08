<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 10. Web Servers and CLI apps

In this final (and bonus) chapter we will show some examples of how easy it is to create web servers and CLI applications with Node.js.

This section does not try to be comprehensive but it just wants to give you some inputs to start exploring these topics.



## [`01-hello-web-server.js`](./01-hello-web-server.js)

With Node.js is very easy to create web servers.

You can do that without having to install a web framework.

Simply use the `http` (or `https`) package.

```js
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
```

> Execute this example with:
>
> ```bash
> node ./10-web-servers-and-cli/01-hello-web-server.js
> ```


## [`02-server-with-request-batching.js`](./02-server-with-request-batching.js)

This is an advanced example that shows how to create a web server that uses
the technique of request batching to improve performance when handling a high throughput
of similar requests.

For more details check out the benchmarks here: https://loige.link/req-batch-bench

```js
import { createServer } from 'http'

const mockHotels = [
  { name: 'the house of zeus' },
  { name: 'wild rooster motel' },
  { name: 'zagreus palace' }
]

const numConcurrent = new Map()
const pendingRequests = new Map()

const db = {
  query (q) {
    return new Promise((resolve, reject) => {
      const [cityId] = q.values
      // simulates the db getting progressively slower based
      // on the number of concurrent queries
      const responseTime = Math.random() * numConcurrent.get(cityId)
      setTimeout(() => resolve(mockHotels), responseTime)
    })
  }
}

function getHotelsForCity (cityId) {
  if (pendingRequests.has(cityId)) {
    const concurrent = numConcurrent.get(cityId) || 0
    numConcurrent.set(cityId, concurrent + 1)
    // *** comment the following line to disable request batching ***
    return pendingRequests.get(cityId)
  }

  const asyncOperation = db.query({
    text: 'SELECT * FROM hotels WHERE cityid = $1',
    values: [cityId]
  })

  pendingRequests.set(cityId, asyncOperation)

  asyncOperation.finally(() => {
    pendingRequests.delete(cityId)
    numConcurrent.delete(cityId)
  })

  return asyncOperation
}

const urlRegex = /^\/api\/hotels\/([\w-]+)$/

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const matches = urlRegex.exec(url.pathname)

  if (!matches) {
    res.writeHead(404, 'Not found')
    return res.end()
  }

  const [, city] = matches

  const hotels = await getHotelsForCity(city)

  res.writeHead(200)
  res.end(JSON.stringify({ hotels }))
})

server.listen(8000)
```

> Execute this example with:
>
> ```bash
> node ./10-web-servers-and-cli/02-server-with-request-batching.js
> ```


## [`03-hello-cli.js`](./03-hello-cli.js)

Node.js makes it very easy to create CLI applications too.

This is a very simple CLI application that prints a greeting to the console.

```js
const args = process.argv.slice(2) // we skip the first two arguments because they are `node` and the name of the script
const [who] = args // we get the first argument

console.log(`Hello ${who || 'World'}!`)

// make this script executable with:
// > chmod +x 10-web-servers-and-cli/03-hello-cli.js
// then run it with:
// > ./10-web-servers-and-cli/03-hello-cli.js friends
```

> Execute this example with:
>
> ```bash
> node ./10-web-servers-and-cli/03-hello-cli.js
> ```


## [`04-uppercasify-cli.js`](./04-uppercasify-cli.js)

In Node.js CLI scripts you can easily interact with STDIN and STDOUT.

- `process.stdin` is a readable stream that you can use to read data from standard input.
- `process.stdout` is a writable stream that you can use to write data to standard output.

The following script reads text from the standard input, uppercasifies and writes the resulting data to standard output.

Here we are using advanced streaming features. If you want to learn more about those check out: https://github.com/lmammino/streams-workshop

```js
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
```

> Execute this example with:
>
> ```bash
> node ./10-web-servers-and-cli/04-uppercasify-cli.js
> ```


---


| [⬅️ 09-async-patterns](/09-async-patterns/README.md) | [🏠](/README.md) |    |
|:----------------------------------------------------|:---------------:|--:|

