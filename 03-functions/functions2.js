function greeting () {
  return `Hello ${this}`
}

console.log(greeting())
console.log(greeting.bind('world')())
