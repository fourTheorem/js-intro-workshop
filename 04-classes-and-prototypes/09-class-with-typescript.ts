/* eslint no-unused-vars: "off" */

class Chicken {
  private _age: number = 2

  toString (): string {
    return `This chicken is ${this._age} years old`
  }
}

// Transpiled output: See class1.transpiled.js

const chicken = new Chicken()
// console.log(chicken._age) // Property 'age' is private and only accessible within class 'Chicken'.

// Show example: React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED

/// /////////////////////////////////////////////////////////////////////////////
// The code above transpiles to the following plain JavaScript:
//
// "use strict";
// class Chicken {
//     constructor() {
//         this._age = 2;
//     }
//     toString () {
//         return `This chicken is ${this._age} years old`;
//     }
// }
// const chicken = new Chicken();
// console.log(chicken._age);
