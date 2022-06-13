/**
 * What value will be printed?
 */

var x = 10;
function test()
{
    var x = 20;
}
 
test();
console.log(x);

/**
 * Answer: 10
 * 
 * Here the variable ‘x’ declared (and of course initialized) outside the function ‘test’ 
 * has a global scope and that’s why it is accessible anywhere in this scope globally. 
 * However, the one declared and initialized inside the ‘test’ function can be accessible only inside that function. 
 * So the below code snippet will print 20 on the console upon execution.
 */