/*

EcmaScript 2015 (ES6 or ES2015) introduced the `class` keyword, which allows us to define prototypes in a more natural way.

*/

class Vehicle {
  constructor (wheels, engine) { // the constructor
    this.wheels = wheels
    this.engine = engine
  }

  describe () { // a method
    console.log(`This vehicle has ${this.wheels} wheels and a ${this.engine} engine`)
  }
}

const car = new Vehicle(4, 'diesel')

car.describe()
