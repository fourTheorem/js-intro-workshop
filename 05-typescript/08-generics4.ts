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
