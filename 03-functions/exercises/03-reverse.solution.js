/**
 * @param {string} text
 * @returns {string}
 */
export default function reverse (text) {
  let reversedText = ''

  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i]
  }

  return reversedText
}
