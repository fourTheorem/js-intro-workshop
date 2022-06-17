class Vehicle {
    constructor(wheels, engine) {
        this.wheels = wheels
        this.engine = engine
    }

    describe() {
        console.log(`This vehicle has ${this.wheels} wheels and a ${this.engine} engine`)
    }
}

const car = new Vehicle(4, 'diesel')

car.describe()