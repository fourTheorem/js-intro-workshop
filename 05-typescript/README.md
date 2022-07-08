<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 05. TypeScript

In this chapter we will learn the basics of TypeScript.

We will discuss:

  - Interfaces
  - Types
  - Generics
  - Advanced types with utility types



## [`01-interfaces.ts`](./01-interfaces.ts)

TypeScript allows you to define generic interfaces (which don't really exist in plain JavaScript).

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

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/01-interfaces.ts
> ```


## [`02-types1.ts`](./02-types1.ts)

With TypeScript, you can specify the type of every variable during an assignment.

In most cases, this is not necessary because TypeScript can infer these types/

```ts
// Basic types
const person: string = 'Elon Musk'
const age: number = 50
const isCEO: boolean = true
const fortune: bigint = 200_000_000_000n
const dateOfBirth: Date = new Date(1971, 5, 28)
const companies: Array<string> = ['Tesla', 'SpaceX', 'Neuralink', 'The Boring Company']
```

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/02-types1.ts
> ```


## [`03-types2.ts`](./03-types2.ts)

TypeScropt allows the definition of type aliases.

Aliasing doesn’t actually create a new type - it creates a new name to refer to that type

```ts
// Type aliases
type MyString = string

const companyName: MyString = 'Tesla'

// We can also have a type alias refer to itself in a property:
type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
};

interface Person {
  name: string;
}

const people: Tree<Person> = {
  value: {
    name: 'Elon Musk'
  }
}
```

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/03-types2.ts
> ```


## [`04-types3.ts`](./04-types3.ts)

Types can also be defined using type unions (`|` operator) and type intersections (`&` operator).

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

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/04-types3.ts
> ```


## [`05-generics1.ts`](./05-generics1.ts)

TypeScript supports generic types

```ts
function append<T> (list: T[], item: T): T[] {
  return [...list, item]
}

const names = ['Luciano', 'Guilherme']
append(names, 'Elon Musk') // Matches

const brands = ['Ferrari', 'Audi']
// append(brands, 2) // Type number is not assignable to parameter of type string
```

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/05-generics1.ts
> ```


## [`06-generics2.ts`](./06-generics2.ts)



```ts
function count<T> (list: T[]): number {
  return list.length
}

const myList = ['A', 'B', 'C']
count(myList)
```

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/06-generics2.ts
> ```


## [`07-generics3.ts`](./07-generics3.ts)

Generics can also have constraints

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

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/07-generics3.ts
> ```


## [`08-generics4.ts`](./08-generics4.ts)

The most common use case for generics is to declare what is returned by a very generic API. For instance the `fetch` API returns data that depends on what
the server will return.

If we want to assume the response will be of a particular type (so we can type check how we use that response) we can use generics with `fetch`.

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

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/08-generics4.ts
> ```


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

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/09-generics5.ts
> ```


## [`10-generics6.ts`](./10-generics6.ts)

TypeScript offers a set of Utility types.

These are generic types that can be use to construct types from other existing types.

An example is the `Pick` utility type that allows us to create a type by "picking" a set of properties from an existing type.

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

> Execute this example with:
>
> ```bash
> ts-node ./05-typescript/10-generics6.ts
> ```


---


| [⬅️ 04-classes-and-prototypes](/04-classes-and-prototypes/README.md) | [🏠](/README.md) | [06-callbacks ➡️](/06-callbacks/README.md) |
|:--------------------------------------------------------------------|:---------------:|------------------------------------------:|

