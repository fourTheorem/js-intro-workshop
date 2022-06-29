setInterval(() => {
    console.log('Ping');
}, 1000);

// TO CANCEL AN INTERVAL

const interval = setInterval(() => {
    console.log('Ping');
    clearInterval(interval);
}, 1000);