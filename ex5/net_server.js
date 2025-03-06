const net = require('net');
const server = net.createServer((connection) => {
    console.log("Client connected");

    connection.on('data', (data) => {
        console.log("Received:", data.toString());
        // Send a reply back to the client
        connection.write(`Processed: ${data.toString()}`);
    });

    connection.on('end', () => {
        console.log("Client disconnected");
    });
});

server.listen(8080, () => {
    console.log("Server is listening on port 8080");
});