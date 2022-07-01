/* eslint no-unused-vars: "off" */

/*
  Exercise:

  Write a callback based function that takes a path as an argument.
  If the path exists and it is a file, then writes a bomb emoji ("💣") into that file.

  If the file was bombed call the callback with result value "bombed".
  If the file was not bombed call the callback with the result value "not bombed".

  To write to a file you can use the `fs.writeFile` function:

  Example:

  ```js
  import { writeFile } from 'fs'
  writeFile('someFile.txt', '💣', cb)
  ```

  To check that the path exists and it is a file you can use the `fs.stat` function:

  Examole:

  ```js
  import { stat } from 'fs'
  stat('someFile.txt', (err, stats) => {
    // TODO - handle errors here!

    if (stats.isFile()) {
      // it is a file
    }
  })
  ```

  Make sure to call the callback function when the operation is complete and to propagate errors correctly
*/

import { writeFile, stat } from 'fs'

export function fileBomber (filePath, cb) {
  // write your code here
  // 1. check if the path exists and it is a file
  // 2. if it is a file, write a bomb emoji ("💣") into that file and call the callback with the result "bombed"
  // 3. if not just call the callback with result "not bombed"
  // 4. propagate errors correctly
}
