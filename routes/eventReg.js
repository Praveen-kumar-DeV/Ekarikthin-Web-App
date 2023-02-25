
const express=require('express');
const router=express.Router();
const cors=require('cors');
const controller=require('../controllers/controller');


const eventReg = require("../models/registermodel");
const { isLoggedIn,isTime} = require('../middlewares/user');




router.route('/register').post(isTime ,controller.register).get(isTime,(req,res)=>{
    res.render('reg');
});
router.route('/otp').post(controller.sendOtp);


router.route('/offregister').post(isLoggedIn,controller.offregister);




router.route('/onlinePayment').get(async(req,res)=>{
  const { tokenId}=req.query;
 
  const user = await eventReg.findOne({tokenId});
 
  if(user.paymentMode==="AtVenue"){
    res.render('suc',{user:user});
  }
  else{
  res.render('onlinepay',{user:user});
  }
});



module.exports= router;

