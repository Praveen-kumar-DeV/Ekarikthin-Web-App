const randToken = require("rand-token");


//-------------------registration requirements-----------------------
const eventReg = require("../models/registermodel");
const Otp = require("../models/otp");
const { transporter, mailOptionsFunc } = require("../config/mail");

const genToken = () => {
  return "EK" + randToken.generate(6)+"23";
};
//-------------Mail for otp verification--------------------------------------
const sendMail = (mailOptions) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("====================================");
      console.log("MSG SENDING ERR:: ", err);
      console.log("====================================");
      return res.status(500).json({
        success: false,
        code: "MAIL_ERROR",
        message: "Error in sending mail",
      });
    } else if (info.rejected.length > 0) {
      console.log("====================================");
      console.log("MSG SENDING REJECTED:: ", info.rejected);
      console.log("====================================");
      return res.status(500).json({
        success: false,
        code: "MAIL_ERROR",
        message: "Error in sending mail",
      });
    }
  });
};

const verifyOtp = async (otp, email) => {
   
  const user = await Otp.findOne({ email });
  if (user) {
  
    if (user.otp === Number(otp)) {
        
      return user.expireTime >= Number(new Date().getTime());
    }
    return false;
  }
  return false;
};

//-----------------------exporting module of input from frontend---------------------------

exports.register = async (req, res) => {
  const {
    name,
    email,
    college,
    phone,
    category,
    event,
    eventCode,
    cost,
    paymentMode,
    paid,
    otp,
    
    
  } = req.body;

// -----------------checking for duplicate content-------------

  const isReg = await eventReg.findOne({
    eventCode,
    email,
  });
    
  if (isReg) { 
    return res.status(400).json({
      success: false,
      code: "REG_EXISTS",
      message: "You are already registered for this event",
    });
  }
//------------------otp verification---------------------------------
  const isValid = await verifyOtp(otp, email);
  
  if (!isValid) {
    return res.status(400).json({
      success: false,
      code: "OTP_INVALID",
      message: "OTP is invalid",
    });
  }



  const newEventReg = new eventReg({
    name,
    category,
    event,
    email,
    phone,
    college,
    eventCode,
    tokenId: genToken(),
    paid,
    cost,
    paymentMode,
  });
  
  try {
        const data =await newEventReg.save();

        
          const mailOptions = mailOptionsFunc(
           name,
           category,
           event,
           cost,
       		 newEventReg.tokenId,
         	 paymentMode,
           email
  					  );

    sendMail(mailOptions);
   
    
  
   
 
    
 
 res.status(201).json({
  success:true,
  data
 });
     

      }
    
   catch (err)
    {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};



exports.getRegistrations = async (req, res) => {
  try {
    const eventRegistrations = await eventReg.find({});
    res.status(200).json({
      success: true,
      data: {
        eventRegistrations,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

exports.sendOtp = async (req, res,next) => {
  const { email } = req.body;
 

  if (!email) {
    return res.status(400).json({
      success: false,
      code: "INVALID_DATA",
      message: "Please provide Email",
    });
  }
  const otp = Math.floor(100000 + Math.random() * 900000);
  const dataExist = await Otp.findOne({ email });
  if (dataExist) {
    const id = dataExist._id;
    await Otp.findByIdAndUpdate(
      { _id: id },
      {
        email,
        otp: Number(otp),
        expireTime: new Date().getTime() + 600 * 1000,
      }
    );
  } else {
    await Otp.create({
      email,
      otp,
      expireTime: new Date().getTime() + 600 * 1000,
    });
  }

  const options = {
    from: `Ekarikthin - NITN <${process.env.GMAIL_USERNAME}>`,
    to: email,
    subject: "Ekarikthin'23 Registration OTP",
    html: `
<head>
   
    <title>Document</title>
<style>
.mailtitle{
  display: flex;
  justify-content: flex-start;
  position: relative;

  
}

.mailtitle .mailtitlepos
{
  position: absolute;
    width: 60px;
    top:23px;
    left: -20px;
}
.mailtitle .maillogotext  p
{
  
  font-size: 30px;
  color: white;
  font-family: 'Outfit', sans-serif;
  font-weight: bold;
 

}



    </style>
</head>
<body>

  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <a  href="index.html" style="text-decoration: none;">
          <div class="mailtitle">
           
          <div  class="maillogotext">
          <p style="color: #000;">Ekarikthin'23</p>
          </div>  
          </div>
               
      </a>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for your interest in Ekarikthin'23. Use the following OTP to complete your Registration procedures. OTP is valid for 5 minutes</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
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

  sendMail(options);
  

  res.status(200).json({
    success: true,
  });
  next();
};


exports.offregister = async (req, res) => {
  const {
    name,
    email,
    college,
    phone,
    category,
    event,
    eventCode,
    cost,
    paymentMode,
    paid,
    otp,
    
    
  } = req.body;
 


  const isReg = await eventReg.findOne({
    eventCode,
    email,
  });
  
  if (isReg) { 
    return res.status(400).json({
      success: false,
      code: "REG_EXISTS",
      message: "You are already registered for this event",
    });
  }


  const newEventReg = new eventReg({
    name,
    category,
    event,
    email,
    phone,
    college,
    eventCode,
    tokenId: genToken(),
    paid,
    cost,
    paymentMode,
  });
  
  try {
        const data =await newEventReg.save();

       
          const mailOptions = mailOptionsFunc(
                 				  name,
          				          category,
           					  event,
           					 eventCode,
       						 newEventReg.tokenId,
         					paymentMode,
                   email
  					  );
 
              sendMail(mailOptions);
 res.render('suc',{user:data});

      }
    
   catch (err)
    {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};