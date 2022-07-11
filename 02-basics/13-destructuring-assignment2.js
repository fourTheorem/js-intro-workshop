/*

We can use the destructuring assignment to loop over keys-and-values of an object:

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
  age: 30
}

// loop over keys-and-values
for (const [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`) // name:John, then age:30
}
