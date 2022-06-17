function append<T>(list: T[], item: T): T[] {
    return [...list, item]
}

let names = ['Luciano', 'Guilherme']
append(names, 'Elon Musk') // Matches

let brands = ['Ferrari', 'Audi']
append(brands, 2) // Type number is not assignable to parameter of type string