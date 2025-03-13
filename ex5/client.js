const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sendMessage = (message) => {
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
            promptForMessage();
        });
    });

    req.write(message);
    req.on('error', (error) => {
        console.error(`Problem with request: ${error.message}`);
    });

    req.end();
};

const promptForMessage = () => {
    rl.question('Enter your message : ', (message) => {
        if (message.toLowerCase() === 'exit') {
            console.log('Exiting the chat. Goodbye!');
            rl.close(); // Close the readline interface
            return; // Exit the function
        }
        sendMessage(message);
    });
};

// Start the prompt for the first message
promptForMessage();