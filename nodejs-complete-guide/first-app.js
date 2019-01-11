setTimeout(() => {
    console.log('Asynchronous code executed!');
}, 5000);

const fs = require('fs');
fs.writeFileSync('Hello.txt', 'hello from node.js');
console.log('Hello from node js');