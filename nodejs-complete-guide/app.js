const http = require('http');

const httpserver = http.createServer((request, response) => {
    const body = [];
    request.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });

    request.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
    });

    response.write("Hello");
    response.end();

});

httpserver.listen(3000);