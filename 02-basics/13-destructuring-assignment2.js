/*

The destructuring assignment also works with objects

<details>
<summary><strong>Syntax</strong></summary>

> ```js
> const { a, b } = obj
> const { a: a1, b: b1 } = obj
> const { a: a1 = aDefault, b = bDefault } = obj
> const { a, b, ...rest } = obj
> const { a: a1, b: b1, ...rest } = obj
> ```
</details>
*/

const user = {
  name: 'John',
  age: 30,
  location: 'London',
  team: 'Arsenal'
}

const { name, location = 'Amsterdam', ...rest } = user

console.log(name)
// expected output: John

console.log(location)
// expected output: London

console.log(rest)
// expected output: Object { age: 30, team: 'Arsenal' }
