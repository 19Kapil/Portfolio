const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: 'parazulikapil777@gmail.com', // Your email address
      pass: 'j@yNePaLI1919'   // Your email password
    }
  });

  // Setup email data
  const mailOptions = {
    from: email,
    to: 'parazulikapil777@gmail.com', // The email where you want to receive messages
    subject: `Message from ${name}`,
    text: message
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Something went wrong');
    }
    res.send('Message sent successfully!');
  });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
