const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', 
    port: 587, 
    secure: false,
    auth: {
        user: 'selvaraj036murugan_bai26@mepcoeng.ac.in',
        pass: 'bharath.'
    }
});

const mailOptions = {
    from: '"Sender Name" <your-email@example.com>', 
    to: 'mani_bai26@mepcoeng.ac.in', 
    subject: 'Hello from Node.js', 
    text: 'This is a test email sent from a Node.js application!', 
    html: '<b>This is a test email sent from a Node.js application!</b>'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ' + error.message);
    }
    console.log('Message sent: %s', info.messageId);
});