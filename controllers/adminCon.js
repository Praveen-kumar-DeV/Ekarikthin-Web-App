const cookieToken = require("../config/cookie-token");
const User = require("../models/user");
const eventReg = require("../models/registermodel.js");
const count=require('../models/count');
exports.login = async (req, res) => {
    const { username, password } = req.body;
   
 
    if (!(username && password)) {
      return res.status(400).json({
        success: false,
        message: "Please provide username and password",
      });
    }
  
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
    }
  
    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
    }
    
    cookieToken(user, res);
  
   
    
  };
  

exports.signup = async (req, res) => {
 
  const { username, password ,event ,role} = req.body;

  if (!(username && password)) {
    return res.status(400).json({
      message: "Please provide username and password",
    });
  }
  try {
    const user = await User.create({
      username,
      password,
      event,
      role,
    });
    
    cookieToken(user, res, 201);
   
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.logout = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
 
  res.status(200).redirect('/admin/login'
  );
};

exports.getRegDetails = async (req, res) => {
  const { tokenId } = req.query;
 
  if (!tokenId) {
    return res.status(400).json({
      success: false,
      message: "Please provide tokenId",
    });
  }

  try {
    const details = await eventReg.findOne({ tokenId });

    if (!details) {
      return res.status(400).json({
        success: false,
        code: "INVALID_TOKEN",
        message: "Invalid token",
      });
    }

    res.status(200).json({
      success: true,
      details,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updatePay = async (req, res) => {
  
  const { tokenId } = req.query;
 
  if (!tokenId) {
    return res.status(400).json({
      success: false,
      message: "Please provide tokenId",
    });
  }

  try {
    const details = await eventReg.findOne({ tokenId });
    
    if (!details) {
      return res.status(400).json({
        success: false,
        code: "INVALID_TOKEN",
        message: "Invalid token",
      });
    }

    if (details.paid) {
     
      return res.status(400).json({
        success: false,
        message: "Already paid for the token",
      });
    }

    details.paid = true;
    details.updatedBy.push({
      name: req.user.username,
      time: new Date().getTime(),
    });
    const result=await details.save();
     
    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data:result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};


exports.getAllRegistrations = async (req, res) => {
  var eve=req.query;
  if(!eve){
  eve='Gully Cricket';}
    

  try {
    

    const allRegs = await eventReg.find({event:eve.eve});
    
    res.status(200).json({
      success: true,
      allRegs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong..!",
    });
  }
};

exports.print=async (req,res)=>{

    if(!req.body){
      const { tokenId } = req.query.valid;
    }
    else{
      const { tokenId } = req.body;
    }
 
 
  if (!tokenId) {
    return res.status(400).json({
      success: false,
      message: "Please provide tokenId",
    });
  }
 

  try {
    const details = await eventReg.findOne({ tokenId });
    
    if(!details.paid){
      return res.status(400).json({
        success: false,
        code: "NOT PAID",
        message: "INCOMPLETE PAYMENT",
      });

    }
    let ser=await count.findOne({ serial:"InvoiceNumber" });
    if (!details) {
      return res.status(400).json({
        success: false,
        code: "INVALID_TOKEN",
        message: "Invalid token",
      });
    }
   if(!ser){
   ser= await Hit.create({ serial:"InvoiceNumber" });

   }
   else{
   await count.findOneAndUpdate({serial:"InvoiceNumber"}, { $inc: { count: 1 } });}

          details.ino=ser.count;

    res.render('receipt',{data:details});
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

};

exports.dashData= async(req,res)=>{
  const user=req.user;
  
  let result;
   if(user.role==='admin'||user.role==='head'||user.role==='admin_main'){
   result = await eventReg.find({},{
       createdAt:false,
       updatedAt:false,
       _id:false,
  });}
 else if(user.role==='leader'){
   
    result = await eventReg.find({category: user.event},{
        createdAt:false,
        updatedAt:false,
        _id:false,
   });}
  else if(user.event=="Cosplay - Solo"||user.event=='Cosplay - Trio'||user.event=='Cosplay - Duo'||user.event=='Cosplay - Group'){
       result = await eventReg.find({event:{ $in: ["Cosplay - Solo","Cosplay - Duo","Cosplay - Trio","Cosplay - Group"] }},{
          createdAt:false,
          updatedAt:false,
          _id:false,
     });
    }

   else if(user.event=="Dance - Solo"||user.event=='Dance - Crew'){
      result = await eventReg.find({event:{ $in: ["Dance - Solo","Dance - Crew"] }},{
         createdAt:false,
         updatedAt:false,
         _id:false,
    });


  }
  else{
    result = await eventReg.find({event:user.event},{
       createdAt:false,
       updatedAt:false,
       _id:false,
  });

}
 
 
 res.status(201).json({
 
  result,
 })
}
exports.CSVdownload=async(req, res) =>{
  const event=req.body;
 
  var filename   =JSON.stringify(event.event);


 
 filename+=".csv";
  
 
  eventReg.find(event).lean().exec({}, function(err, Registrations) {
      if (err) res.send(err);
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader("Content-Disposition", 'attachment; filename='+filename);
      res.csv(Registrations, true);
  });
}