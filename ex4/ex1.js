const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587, 
    secure: false,
    auth: {
        user: 'bharathkumars2535@gmail.com',
        pass: 'zdja flhn ifmh zaho'
    }
});

const mailOptions = {
    from: '"Bharath" <bharathkumas2535@gmail.com>', 
    to: 'bharathkumars2535@gmail.com', 
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