const http = require('http');

http.createServer((req, res) => {
    res.write('hello chiatali!!');
    res.end();

}).listen(5000, () => console.log('server is runnig'));