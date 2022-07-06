/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-use-before-define: "off" */

/**
 * What value will be printed?
 */

var x = 10

function test () {
  if (x > 20) {
    var x = 50
  }

  console.log(x)
}

test()

/**
 * Answer: undefined
 *
 * This is because of the combined effect of variable scoping and variable hoisting
 * The above code snippet will be interpreted as the following before execution:

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
 */
