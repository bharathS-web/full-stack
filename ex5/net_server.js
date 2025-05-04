const net = require('net');
const readline = require('readline');
const p = require('prompt-sync')();

const clients = [];

// Create a readline interface for server input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const server = net.createServer((client) => {

    clients.push(client);

    client.on('data', (data) => {
        const message = data.toString();
        console.log(`${message}`);
        
        broadcastMessage(message);
    });

    client.on('end', () => {
        console.log('Client disconnected');
        clients.splice(clients.indexOf(client), 1);
        broadcastMessage('A user has left the chat.');
    });

    
});

// Function to send a message to all clients
function broadcastMessage(message) {
    clients.forEach((client) => {
        client.write(`\r Server :${message}`);
    });
}

// Function to handle server input
function handleServerInput() {
    rl.question('Server: ', (message) => {
        if (message) {
            broadcastMessage(`${message}`);
        }
        handleServerInput();
    });
}

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Chat server is running on port ${PORT}`);
    handleServerInput(); // Start listening for server input
});