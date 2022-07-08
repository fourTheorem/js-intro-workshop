/* eslint no-unused-vars: "off" */

/*

We will discuss more TypeScript, but for now, keep in mind that when you declare a class with TypeScript,
it will automatically create a type associated to it and it will use it for type-checking.

TypeScript classes support additional features like access modifiers.

These are different from the access modifiers you've seen previously. In fact, TypeScript uses the access modifiers only at compile time (type checking).

Once the code is converted to JavaScript, you can access private members if you really want to (they are not really private)!

*/

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
