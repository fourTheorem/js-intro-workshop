import { writeFile, stat } from 'fs/promises'

export default function fileBomber (filePath) {
  return new Promise((resolve, reject) => {
    stat(filePath)
      .then(stats => {
        if (stats.isFile()) {
          return writeFile(filePath, '💣')
            .then(() => resolve('bombed'))
            .catch(reject)
        } else {
          resolve('not bombed')
        }
      })
      .catch(reject)
  })
}
