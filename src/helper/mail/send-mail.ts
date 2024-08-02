// Import the Nodemailer library
import { getEmailById, updateEmailById } from '../../db/email';
import nodemailer from 'nodemailer';

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'live.smtp.mailtrap.io',
  port: 587,
  secure: false, // use SSL
  auth: {
    user: 'Mahil',
    pass: '1234567890',
  }
});

export const sendEmail =async (emailId : string ) => {
    // Configure the mailoptions object

    const email = await getEmailById(emailId);

    const mailOptions = {
        from: email.senderEmail,
        to: email.receiverEmail,
        subject: email.subject,
        text: email.text
    }
    // Send the email
    transporter.sendMail(mailOptions, async function(error, info){
        if (error) {
            console.log('error',error);
        } else {
            console.log('Email sent: ' + info.response);
            const email  = await updateEmailById(emailId, { sended : true });
        }
    })


}