const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com', 
    // port: 587, 
    // secure: false,
    service:'gmail',
    auth: {
        user: 'mail@gmail.com',
        pass: 'zdja flhn ifmh zaho'
    }
});

const mailOptions = {
    from: '"Bharath" <@gmail.com>', 
    to: '@gmail.com', 
    subject: 'Hello from Node.js - Nodemailer ', 
    text: 'BHARATH KUMAR S  \n This is a test email sent from a Node.js application!', 
    html: '<b>This is a test email sent from a Node.js application!</b>'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ' + error.message);
    }
    console.log('Message sent: %s', info.messageId);
});