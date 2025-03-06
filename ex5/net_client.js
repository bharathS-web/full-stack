const net = require('net');
const client = net.createConnection({ port:  8080 }, () => {
    console.log("Connected to server");
    const messages = ['s','u','d','h','a','r','s','a','n'];
    let currentIndex = 0;

    // Send the first message immediately after connecting
    client.write(messages[currentIndex]);
    currentIndex++;

    client.on('data', (data) => {
        console.log('Server reply:', data.toString());
        
        // Send the next message if available
        if (currentIndex < messages.length) {
            client.write(messages[currentIndex]);
            currentIndex++;
        } else {
            // All messages sent; close the connection
            client.end();
        }
    });
});

client.on('end', () => {
    console.log("Disconnected from server");
});