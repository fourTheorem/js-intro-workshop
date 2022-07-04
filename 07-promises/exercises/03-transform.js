/*
  Exercise:

  Let's implement a `transform(promise, transformer)` function.
  This function receives a promise and a tranformer function as arguments.
  The transformer function will be applied to the resolved value of promise, allowing
  the value to be modified.

  Example:
  ```js
  const transformer = (value) => `Super ${value}`;
  transform(Promise.resolve('chicken'), transformer)
    .then((value) => {
      console.log(`Transformed value is: ${value}`)
    })
  ```

  Should print:
  ```plain
  Transformed value is: Super chicken
  ```
*/

/**
 * @param {Promise} promise
 * @param {function} transformer
 */
export default function transform (promise, transformer) {
  // Write your code here!
}
