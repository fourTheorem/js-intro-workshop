/* eslint no-extend-native: "off" */

// extending a native class
String.prototype.greet = function () {
  return `Hello ${this}`
}

console.log('Chicken'.greet())

// This is what happens with polyfill
