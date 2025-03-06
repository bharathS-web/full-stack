const http = require('http');
const options = {
    hostname: 'localhost',
    port: 4000,
    path: '/',
    method: 'POST',
    };
const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(`Response from server: ${data}`);
    });
});

req.write('Hello, Server!');
req.on('error', (error) => {
    console.error(`Problem with request: ${error.message}`);
});
req.end();