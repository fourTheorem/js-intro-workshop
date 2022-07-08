/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */

/*

Here's a bit of a challenge for you.

Can you tell what value will be printed by the following code?

<details>
<summary>👀  Check out the answer!</summary>

<quote>

### Answer: `10`

- Here the variable `x` declared (and of course initialized) outside the function `test`.
- It has a global scope and that’s why it is accessible anywhere in this scope globally.
- However, the one declared and initialized inside the `test` function can be accessible only inside that function.
- So the below code snippet will print 20 on the console upon execution.

</quote>

</details>

*/

var x = 10
function test () {
  var x = 20
}

test()
console.log(x)
