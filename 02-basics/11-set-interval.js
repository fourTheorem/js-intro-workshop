/* eslint no-var: "off" */
/* eslint prefer-const: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-use-before-define: "off" */
/* eslint no-redeclare: "off" */
/* eslint no-undef: "off" */

/*

If you want to execute a certain function repeatedly at specific intervals of time you can use `setInterval()`.

*/

setInterval(() => {
  console.log('Ping')
}, 1000) // will repeat every second

const interval = setInterval(() => {
  console.log('Pong')
  // you can cancel an interval by calling clearInterval
  clearInterval(interval)
}, 1000) // will repeat every second, but we cancel it after the first execution!
