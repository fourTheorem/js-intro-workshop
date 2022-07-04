/**
 * @param {Array<number>} arr
 * @returns {number}
 */
export default function sum (arr) {
  const sum = arr.reduce((total, num) => {
    return total + num
  }, 0)

  return sum
}
