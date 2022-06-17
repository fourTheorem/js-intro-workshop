/**
 * Private members
 */

class Product {
    #basePrice
    #maxDiscount 

    constructor(name) {
        this.name = name

        this.#basePrice = 50
        this.#maxDiscount = 5
    }
    
    #getChairAmount(taxCharge) {
       return this.#basePrice + (this.#basePrice - this.#basePrice * this.#maxDiscount / 100) + taxCharge;
	}

    purchase() {
        console.log('**** BILLING INFORMATION ****');
        console.log(`Product = ${this.name}`);
		console.log(`Price = ${this.#getChairAmount(20)}`);
    }
}

const chair = new Product('Office Chair')
chair.purchase()