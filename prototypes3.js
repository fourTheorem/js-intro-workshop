// extending a native class
String.prototype.greet = function () {
    return `Hello ${this}`;
}

console.log('Chicken'.greet());