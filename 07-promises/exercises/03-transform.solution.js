/**
 * @param {Promise} promise
 * @param {function} transformer
 */
export default function transform (promise, transformer) {
  return promise.then(transformer)
}
