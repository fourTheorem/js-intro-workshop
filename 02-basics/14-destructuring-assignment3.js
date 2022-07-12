/*

We can use the destructuring assignment to loop over keys-and-values of an object:

*/

const user = {
  name: 'John',
  age: 30
}

// loop over keys-and-values
for (const [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`) // name:John, then age:30
}
