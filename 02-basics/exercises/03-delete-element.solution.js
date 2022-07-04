/**
 * @param {Array<number>} arr
 * @param {number} element
 * @returns {Array<number>}
 */
export default function deleteElement (arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      arr.splice(i, 1)
    }
  }

  return arr
}
