/**
 * @param {number[]} numbers
 * @returns {number}
 */
export default function sum (numbers) {
  let total = 0

  for (const value of numbers) {
    total += value
  }

  return total
}
