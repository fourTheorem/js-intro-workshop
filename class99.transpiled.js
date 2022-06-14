"use strict";
class Chicken {
    constructor() {
        this._age = 2;
    }
    toString() {
        return `This chicken is ${this._age} years old`;
    }
}
const chicken = new Chicken();
console.log(chicken._age);