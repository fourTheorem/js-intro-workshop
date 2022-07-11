/*

The destructuring assignment syntax is a JavaScript expression that makes it
possible to unpack values from arrays or properties from objects, into distinct variables.

<details>
  <summary><strong>Syntax</strong></summary>

  > const [a, b] = array
  > const [a, , b] = array
  > const [a = aDefault, b] = array
  > const [a, b, ...rest] = array
  > const [a, , b, ...rest] = array
  > const [a, b, ...{ pop, push }] = array
  > const [a, b, ...[c, d]] = array
  >
</details>

*/

const [a, b, ...rest] = [10, 20, 30, 40, 50]

console.log(a)
// expected output: 10

console.log(b)
// expected output: 20

console.log(rest)
// expected output: Array [30, 40, 50]
