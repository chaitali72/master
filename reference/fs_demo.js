const fs = require('fs');
const path = require('path');


// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('folder created...');
// });

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world!!'
    , err => {
        if (err) throw err;
        console.log('file written...');
    });

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' i love node.js'
    , err => {
        if (err) throw err;
        console.log('file written...');
    });