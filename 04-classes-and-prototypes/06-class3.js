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

class ElectricCar extends Car {
  constructor (make, range) {
    super(make, 'eletrict', null)

    this.range = range
  }

  describe () {
    console.log(`${this.make} has a ${this.engine} engine with a range of ${this.range}`)
  }
}

const audi = new Car('Audi', 'petrol', '45L')
const volvo = new Car('Volvo', 'diesel', '60L')
const tesla = new ElectricCar('Tesla', '270 miles')

audi.describe()
volvo.describe()
tesla.describe()
