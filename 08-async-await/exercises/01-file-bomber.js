/* eslint no-unused-vars: "off" */

/*
  Exercise:

  Write an ASYNC function that takes a path as an argument and return a promise.
  If the path exists and it is a file, then writes a bomb emoji ("💣") into that file.

  If the file was bombed resolve the promise with result value "bombed".
  If the file was not bombed resolve the promise with the value "not bombed".

  To write to a file you can use the `fs.writeFile` function from the package 'fs/promises':

  Example:

  ```js
  import { writeFile } from 'fs/promises'
  writeFile('someFile.txt', '💣')
    .then(() => {
      // ...
    })
    .catch(() => {
      // TODO - handle errors here!
    })
  ```

  To check that the path exists and it is a file you can use the `fs.stat` function:

  Example:

  ```js
  import { stat } from 'fs/promises'
  stat('someFile.txt')
    .then(stats => {
      if (stats.isFile()) {
        // it is a file
      }
    })
    .catch (err => {
      // TODO - handle errors here!
    })
  ```

  Make sure to resolve when the operation is complete and reject to propogate any error correctly

  Test your solution with:

  > npm run ex -- 08-async-await/exercises/01-file-bomber.test.js
*/

import { writeFile, stat } from 'fs/promises'

export default async function fileBomber (filePath) {
  // write your code here
  // 1. check if the path exists and it is a file
  // 2. if it is a file, write a bomb emoji ("💣") into that file and resolve with the result "bombed"
  // 3. if not just resolve with result "not bombed"
  // 4. propagate errors correctly
}
