/* eslint no-extend-native: "off" */

/*

We said that prototypes can be changed at runtime.

This is something that allows to change the behaviour of all the objects that inherit from a specific prototype (including objects that have been created already).

This is something that can be used to extend even native prototypes like String.

This is often used in polyfills to add missing methods to native prototypes.

*/

// extending a native class
String.prototype.greet = function () {
  return `Hello ${this}`
}

console.log('Chicken'.greet()) // "Hello Chicken"
