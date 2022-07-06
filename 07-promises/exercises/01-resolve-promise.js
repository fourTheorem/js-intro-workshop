/*
  Exercise:

  Let's implement a `resolveValue(value)` function.
  This function receives a value and will return a promise that will
  resolve that value using `Promise.resolve()`.

  Example:
  ```js
  resolveValue('chicken')
    .then((response) => {
      console.log(`Response is: ${response}`)
    })
  ```

  Should print:
  ```plain
  Response is: chicken
  ```

  Test your solution with:

  > npm run ex -- 07-promises/exercises/01-resolve-promise.test.js
*/

/**
 * @param {*} value
 * @returns {Promise<*>}
 */
export default function resolveValue (value) {
  // Write your code here!
}
