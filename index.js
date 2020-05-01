const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     res.end('<h1>Home</h1>');
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'chaitali mahida', age: 26 },
    //         { name: 'sujit mahida', age: 30 }
    //     ];
    //     res.writeHead(200, { 'content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;

        case '.css':
            contentType = 'text/css';
            break;

        case '.html':
            contentType = 'text/html';
            break;

        case '.json':
            contentType = 'application/json';
            break;

        case '.png':
            contentType = 'image/png';
            break;

        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //read file

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENONENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                res.writeHead(500);
                res.end(`serverError : ${err.code}`);
            }

        } else {
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.end(content, 'utf8');
        }
    });
});





const PORT = process.env.PORT || 4001;
server.listen(PORT, () => console.log(`ser is running on port ${PORT}`));