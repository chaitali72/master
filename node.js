const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'content-Type': 'text/html' });
            return res.end("404 not found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8001);