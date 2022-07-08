/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-use-before-define: "off" */

/*

Here's another of a challenge for you.

Can you tell what value will be printed by the following code?

<details>
<summary>👀  Check out the answer!</summary>

<quote>

### Answer: `undefined`

- This is because of the combined effect of variable scoping and variable hoisting
- The above code snippet will be interpreted as the following before execution:

```js
var x;
x = 10;

function test()
{
  var x;
  if (x > 20) {
    x = 50;
  }

  console.log(x);
}

test();
```

</quote>

</details>

*/

var x = 10

function test () {
  if (x > 20) {
    var x = 50
  }

  console.log(x)
}

test()
