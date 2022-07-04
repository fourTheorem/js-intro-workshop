/**
 * @param {Array<Array<number>>} arr
 * @returns {Array<number>}
 */
export default function print2dArray (arr) {
  const results = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      results.push(arr[i][j])
    }
  }

  return results
}
