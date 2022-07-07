<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 05. TypeScript

TODO:


## [`01-interfaces.ts`](./01-interfaces.ts)



```ts
interface IAnimal {

}

interface IChicken extends IAnimal {

}

// SAME as

// type IAnimal {

// }

// type IChicken = IAnimal & {

// }
```

Execute this example with:

```bash
node ./05-typescript/01-interfaces.ts
```


## [`02-types1.ts`](./02-types1.ts)



```ts
// Basic types
const person: string = 'Elon Musk'
const age: number = 50
const isCEO: boolean = true
const fortune: bigint = 200_000_000_000n
const dateOfBirth: Date = new Date(1971, 5, 28)
const companies: Array<string> = ['Tesla', 'SpaceX', 'Neuralink', 'The Boring Company']
```

Execute this example with:

```bash
node ./05-typescript/02-types1.ts
```


## [`03-types2.ts`](./03-types2.ts)



```ts
// Type aliases
type MyString = string

const companyName: MyString = 'Tesla' // Aliasing doesn’t actually create a new type - it creates a new name to refer to that type

// We can also have a type alias refer to itself in a property:
type Tree<T> = {
    value: T;
    left?: Tree<T>;
    right?: Tree<T>;
};

interface Person {
    name: string;
}

const people: Tree<Person> = { /* eslint "no-unused-vars": "off" */
  value: {
    name: 'Elon Musk'
  }
}
```

Execute this example with:

```bash
node ./05-typescript/03-types2.ts
```


## [`04-types3.ts`](./04-types3.ts)



```ts
type Employee = {
    name: string
    age: number
}

type CEO = Employee & {
    company: string
}

type PublicProfile = Pick<CEO, 'name' | 'company'>
```

Execute this example with:

```bash
node ./05-typescript/04-types3.ts
```


## [`05-generics1.ts`](./05-generics1.ts)



```ts
function append<T> (list: T[], item: T): T[] {
  return [...list, item]
}

const names = ['Luciano', 'Guilherme']
append(names, 'Elon Musk') // Matches

const brands = ['Ferrari', 'Audi']
// append(brands, 2) // Type number is not assignable to parameter of type string
```

Execute this example with:

```bash
node ./05-typescript/05-generics1.ts
```


## [`06-generics2.ts`](./06-generics2.ts)



```ts
function count<T> (list: T[]): number {
  return list.length
}

const myList = ['A', 'B', 'C']
count(myList)
```

Execute this example with:

```bash
node ./05-typescript/06-generics2.ts
```


## [`07-generics3.ts`](./07-generics3.ts)



```ts
interface Sized {
    length: number
}

function countSized<T extends Sized> (list: T): number {
  return list.length
}

// SO

class ChickenFlock implements Sized {
  chikens: string[]

  add (chicken: string) {
    this.chikens.push(chicken)
  }

  get length (): number {
    return this.chikens.length
  }
}

const myFlock = new ChickenFlock()
countSized(myFlock)

// AND ALSO

const letters = ['A', 'B', 'C']
countSized(letters)
```

Execute this example with:

```bash
node ./05-typescript/07-generics3.ts
```


## [`08-generics4.ts`](./08-generics4.ts)



```ts
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
```

Execute this example with:

```bash
node ./05-typescript/08-generics4.ts
```


## [`09-generics5.ts`](./09-generics5.ts)



```ts
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
```

Execute this example with:

```bash
node ./05-typescript/09-generics5.ts
```


## [`10-generics6.ts`](./10-generics6.ts)



```ts
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
```

Execute this example with:

```bash
node ./05-typescript/10-generics6.ts
```


---


| [⬅️ 04-classes-and-prototypes](/04-classes-and-prototypes/README.md) | [🏠](/README.md) | [06-callbacks ➡️](/06-callbacks/README.md) |
|:--------------------------------------------------------------------|:---------------:|------------------------------------------:|

