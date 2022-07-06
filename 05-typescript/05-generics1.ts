/* eslint no-unused-vars: "off" */

function append<T> (list: T[], item: T): T[] {
  return [...list, item]
}

const names = ['Luciano', 'Guilherme']
append(names, 'Elon Musk') // Matches

const brands = ['Ferrari', 'Audi']
// append(brands, 2) // Type number is not assignable to parameter of type string
