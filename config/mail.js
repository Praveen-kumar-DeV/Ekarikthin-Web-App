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
    subject: "Ekarikthin '23'   Registration",
    html:` >
<body>
      <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:0px auto;width:70%;padding:20px 0">
      
          <div class="mailtitle" >
           
          <div  class="maillogotext">
          <p id="title" style="color: #FF0000;margin-bottom:0px;">Ekarikthin '23</p>
          </div>  
          </div>
<div style="font-family: Helvetica,Arial,sans-serif;"><h2 style="margin-top:0px;">Thank you for registering for Ekarikthin'22</h2>
      <b>Your registration is confirmed. Please find the details below:</b>
       </div>
      </div>

    
  <div style="justify-content:center; align-item:center;display:flex;width:100%;">
      <div id="box" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
      <p ><span>Name: </span>${name}</p>

      <p><span>Category:</span>${category}</p>
      <p><span>Event:</span> ${event}</p>
      <p><span>Event Code:</span> ${eventCode}</p>
      <p><span>Token ID: <b style="color: red;"></span>${token}</b></p>
      <p><span>Payment Mode: </span>${payMode}</p>
      </div>
  </div>
      <b style="color: red;">Please keep this token ID for future reference.</b>
</div>
 
</body>`,
    auth: {
      type: "Bearer",
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  };
};

module.exports = { transporter, mailOptionsFunc };