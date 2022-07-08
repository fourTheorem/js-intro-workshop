/* eslint no-var: "off" */
/* eslint prefer-const: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-use-before-define: "off" */
/* eslint no-redeclare: "off" */
/* eslint no-undef: "off" */

/*

In this example we are printing "Hello" after about 1 second.

`SetTimeout` will execute the code specified in the passed function only once.

*/

setTimeout(() => {
  console.log('Hello')
}, 1000)

console.log('Bye')
