#!/usr/bin/env node
/*

Node.js makes it very easy to create CLI applications too.

This is a very simple CLI application that prints a greeting to the console.

*/

const args = process.argv.slice(2) // we skip the first two arguments because they are `node` and the name of the script
const [who] = args // we get the first argument

console.log(`Hello ${who || 'World'}!`)

// make this script executable with:
// > chmod +x 10-web-servers-and-cli/03-hello-cli.js
// then run it with:
// > ./10-web-servers-and-cli/03-hello-cli.js friends
