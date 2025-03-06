const https = require('https');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

https.get(url, {rejectUnauthorized:false} ,(res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on('error', (err) => {
    console.error('Error: ' + err.message);
});