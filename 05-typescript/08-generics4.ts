/*

The most common use case for generics is to declare what is returned by a very generic API. For instance the `fetch` API returns data that depends on what
the server will return.

If we want to assume the response will be of a particular type (so we can type check how we use that response) we can use generics with `fetch`.

*/

async function fetchApi<ResultType> (path: string): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`)
  return response.json()
}

// SO

interface UsersListResult {
  count: number
  items: {
    id: string
    name: string
  }
}

const result = await fetchApi<UsersListResult>('/users/all')
console.log(`There are ${result.count} users registered`)

export {} // needed for TS to transpile this to an ESM module (and therefore support top level await)
