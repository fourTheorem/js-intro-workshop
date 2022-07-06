function Greeter (name) {
  this.name = name
}

Greeter.prototype.greet = function () {
  return `Hello ${this.name}`
}

const greeter = new Greeter('Chicken')
console.log(greeter.greet())
console.log(greeter.greet.bind({ name: 'fox' })())
