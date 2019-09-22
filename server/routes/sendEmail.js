require('dotenv').config();
const modemailer = require('nodemailer');



// step 1

// transporter
// var transporter = nodemailer.createTransport({
//     service: '',
//     auth: {
//       user: '',
//       pass: ''
//     }
//   });

const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.creativedesign-web.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
            // user:'nesar.uddin2008@gmail.com',
            // pass:'10-10-2017'
        }
    });

//step 2
// var mailOptions = {
//     from: '',
//     to: '',
//     subject: '',
//     text: ``
//   };
  

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"From Design House👻" <test@creativedesign-web.com>', // sender address
        to: 'nesar.uddin100@gmail.com, info@creativedesign-web.com, nesar@tractive.com.my', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);


//step 3 gmail
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });