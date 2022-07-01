import { writeFile, stat } from 'fs'

export default function fileBomber (filePath, cb) {
  stat(filePath, (err, stats) => {
    if (err) {
      return cb(err)
    }

    if (!stats.isFile()) {
      return cb(null, 'not bombed')
    }

    writeFile(filePath, '💣', (err) => {
      if (err) {
        return cb(err)
      }

      cb(null, 'bombed')
    })
  })
}
