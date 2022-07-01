class Vehicle {
  constructor (wheels, engine) {
    this.wheels = wheels
    this.engine = engine
  }

  describe () {
    console.log(`This vehicle has ${this.wheels} wheels and a ${this.engine} engine`)
  }
}

class Car extends Vehicle {
  constructor (make, engine, tankSize) {
    super(4, engine)

    this.make = make
    this.tankSize = tankSize
  }

  describe () {
    console.log(`${this.make} has a ${this.engine} engine with a size of ${this.tankSize}`)
  }
}

const audi = new Car('Audi', 'petrol', '45L')
const volvo = new Car('Volvo', 'diesel', '60L')

audi.describe()
volvo.describe()
