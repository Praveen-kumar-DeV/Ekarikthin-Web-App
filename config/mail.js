const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    type: "OAUTH2",
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    accessToken: process.env.GMAIL_ACCESS_TOKEN,
    expires: 3599,
  },
  from: process.env.GMAIL_USERNAME,
});

const mailOptionsFunc = (
  name,
  category,
  event,
  eventCode,
  token,
  payMode,
  email
) => {
  return {
    from: `Ekarikthin - NITN <${process.env.GMAIL_USERNAME}>`,
    to: email,
    subject: "Ekarikthin'   Registration",
    html: `<h1>Thank you for registering for Ekarikthin'22</h1>
      <b>Your registration is confirmed. Please find the details below:</b>
      <p>Name: ${name}</p>
      <p>Category: ${category}</p>
      <p>Event: ${event}</p>
      <p>Event Code: ${eventCode}</p>
      <p>Token ID: <b style="color: blue;">${token}</b></p>
      <p>Payment Mode: ${payMode}</p>
      <b style="color: red;">Please keep this token ID for future reference.</b>`,
    auth: {
      type: "Bearer",
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  };
};

module.exports = { transporter, mailOptionsFunc };