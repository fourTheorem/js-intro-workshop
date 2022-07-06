/* eslint no-var: "off" */
/* eslint prefer-const: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-use-before-define: "off" */
/* eslint no-redeclare: "off" */
/* eslint no-undef: "off" */

setInterval(() => {
  console.log('Ping')
}, 1000)

const interval = setInterval(() => {
  console.log('Ping')
  // you can cancel an interval by calling clearInterval
  clearInterval(interval)
}, 1000)
