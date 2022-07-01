/* eslint no-unused-vars: "off" */

class Chicken {
  private _age: number = 2

  toString (): string {
    return `This chicken is ${this._age} years old`
  }
}

// Transpiled output: See class1.transpiled.js

const c = new Chicken()
// console.log(c._age) // Property 'age' is private and only accessible within class 'Chicken'.

// Show example: React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
