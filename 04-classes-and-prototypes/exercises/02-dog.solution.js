export default class Dog {
  static bark () {
    return 'Woof!'
  }

  constructor (name) {
    this.name = name
  }

  introduce () {
    return `My name is ${this.name}`
  }
}
