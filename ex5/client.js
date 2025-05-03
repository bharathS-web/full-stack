const http = require('http');
const prompt = require('prompt-sync')();  

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
    req.end();
};

const promptForMessage = () => {
    const message = prompt('Enter your message: ');
    if (message.toLowerCase() === 'exit') {
        console.log('Exiting the chat. Goodbye!');
        return;
    }
    sendMessage(message);
};

// Start prompt loop
promptForMessage();
