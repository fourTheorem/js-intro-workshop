/* eslint "no-unused-vars": "off" */

/*

TypeScropt allows the definition of type aliases.

Aliasing doesn’t actually create a new type - it creates a new name to refer to that type

*/

// Type aliases
type MyString = string

const companyName: MyString = 'Tesla'

// We can also have a type alias refer to itself in a property:
type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
};

interface Person {
  name: string;
}

const people: Tree<Person> = {
  value: {
    name: 'Elon Musk'
  }
}
