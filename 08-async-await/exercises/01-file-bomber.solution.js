import { writeFile, stat } from 'fs/promises'

export default async function fileBomber (filePath) {
  const stats = await stat(filePath)
  if (!stats.isFile()) {
    return 'not bombed'
  }

  await writeFile(filePath, '💣')
  return 'bombed'
}
