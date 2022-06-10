function Greeter (name) {
  return {
    greet () {
      return `Hello ${name}`
    }
  }
}

const greeter = new Greeter('Chicken')
// greeter.name = 'Chicken'
console.log(greeter.greet())