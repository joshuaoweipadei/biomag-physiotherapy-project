const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// routes
router.post('/appointment', appointment);
router.post('/contact', contactForm);

module.exports = router;

// Appointment Form
async function appointment(req, res) {
  const { names, phone, email } = req.body;

  const smtpOptions = nodemailer.createTransport({
    // host: process.env.EMAIL_HOST,
    // post: process.env.EMAIL_PORT,
    // secure: false,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const sent = await smtpOptions.sendMail({
    from: `"${names}" ${email}`,
    to: 'oweipadeijoshie@gmail.com',
    subject: 'Appointment',
    html: `<h4>New Appointment Booking</h4>
          <p>A new appointment has been made by <b style="text-transform:capitalize">${names}</b></p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Date: ${new Date(new Date())}</p>`
  });

  if(sent) {
    return res.status(200).json('Appointment booked successfully. You\'ll by contacted shortly.')
  } else {
    return res.status(400).json('Could not book appointment.')
  }
}


// Contact Form
async function contactForm(req, res) {
  const { firstname, lastname, email, subject, message } = req.body;

  const smtpOptions = nodemailer.createTransport({
    // host: process.env.EMAIL_HOST,
    // post: process.env.EMAIL_PORT,
    // secure: false,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const sent = await smtpOptions.sendMail({
    from: `"${firstname+' '+lastname}" ${email}`,
    to: 'oweipadeijoshie@gmail.com',
    subject: subject,
    html: `<h4>Contact Form</h4>
          <p>There is a new contact information from <b style="text-transform:capitalize">${firstname+' '+lastname}</b> with message:</p>
          <p><b>Message</b>: ${message}</p>
          <p>(<b>${email}</b>)</p>
          <p>- ${new Date(new Date())}</p>` 
  });

  if(sent) {
    console.log("email sent")
    return res.status(200).json('Your message have been recieved. You\'ll by contacted shortly.')
  } else {
    console.log("email error")
    return res.status(400).json('Could not send message.')
  }
}