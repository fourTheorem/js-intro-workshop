/**
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
export default function evenNumbers (arr) {
  return arr.filter(number => {
    return number % 2 === 0
  })
}
