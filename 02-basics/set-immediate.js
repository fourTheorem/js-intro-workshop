/**
 * setImmediate() and setTimeout() are similar, but behave in different ways depending on when they are called.
 * 
 * setImmediate() executes once the current poll phase completes.
 * setTimeout() is scheduled to be run after a minimum threshold in ms has elapsed.
 */

setImmediate(() => {
    console.log('immediate');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

console.log('global');