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
  cost,
  token,
  payMode,
  email
) => {
  return {
    from: `Ekarikthin - NITN <${process.env.GMAIL_USERNAME}>`,
    to: email,
    subject: "Ekarikthin '23'   Registration",
    html:` <body>
    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <a  href="https://10.14.105.133" style="text-decoration: none;">
            <div class="mailtitle">
             
            <div  class="maillogotext">
            <p style="color: #000;">Ekarikthin'23</p>
            </div>  
            </div>
                 
        </a>
        <p style="font-size:1.1em">Hi,</p>
        <p>Thank you for your interest in Ekarikthin'23. Produce the following DETAILS at helpdesk to receive your receipt. Without a receipt, you will not be able to participate in the event.</p>
        <div id="box">
        <p style="font-weight:bold;"><span>Name: </span>${name}</p>
  
        <p style="font-weight:bold;"><span>Category:</span>${category}</p>
        <p style="font-weight:bold;"><span>Event:</span> ${event}</p>
        <p style="font-weight:bold;"><span>Cost:</span> ${cost}</p>
        <p style="font-weight:bold;"><span>Token ID:</span> <b style="color:red;">${token}</b></p>
        <p style="font-weight:bold;"><span>Payment Mode: </span>${payMode}</p>
        </div>
        <p style="font-size:0.9em;">Regards,<br />Team Ekarikthin</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>Team Ekarikthin</p>
          <p>NIT NAGALAND</p>
          <p>Dimapur</p>
        </div>
      </div>
    </div>
   
  </body>

`,
    auth: {
      type: "Bearer",
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  };
};

module.exports = { transporter, mailOptionsFunc };