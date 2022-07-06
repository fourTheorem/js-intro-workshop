interface ListResult<EntityType> {
    count: number
    items: EntityType[]
}

async function fetchApi<EntityType, ResultType = ListResult<EntityType>> (path: string): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`)
  return response.json()
}

// SO
interface UserEntity {
    id: string
    name: string
}

const result = await fetchApi<UserEntity>('/users/all')
console.log(`There are ${result.count} users registered`)

export {} // needed for TS to transpile this to an ESM module (and therefore support top level await)
