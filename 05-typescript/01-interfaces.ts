/* eslint "no-unused-vars": "off" */

/*

TypeScript allows you to define generic interfaces (which don't really exist in plain JavaScript).

*/

interface IAnimal {

}

interface IChicken extends IAnimal {

}

// SAME as

// type IAnimal {

// }

// type IChicken = IAnimal & {

// }
