const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); 
        });

        req.on('end', () => {
            console.log(`Received message from client: ${body}`);
            res.end('The length of the word is ' + body.length);
        });
    } else {
       
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from the server!\n'); 
    }
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});