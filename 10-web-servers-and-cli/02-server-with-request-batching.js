/*
  This is an advanced example that shows how to create a web server that uses
  the technique of request batching to improve performance when handling a high throughput
  of similar requests.

  For more details check out the benchmarks here: https://loige.link/req-batch-bench
*/

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
