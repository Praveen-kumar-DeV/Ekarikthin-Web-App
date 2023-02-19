
const express=require('express');
const router=express.Router();
const cors=require('cors');
const controller=require('../controllers/controller');
const bodyparser=require('body-parser');

const eventReg = require("../models/registermodel");
const { isLoggedIn } = require('../middlewares/user');




router.use(cors());
router.use(bodyparser.urlencoded({extended : true}));
router.use(bodyparser.json());

//router.use(express.static(path.join(__dirname, 'public')));
router.route('/register').post(controller.register).get((req,res)=>{
    res.render('reg');
});
router.route('/otp').post(controller.sendOtp);
router.route('/verify').post(async(req,res,next)=>{
    const { email,eventCode} = req.body;
    console.log(req.body);
    const isReg = await eventReg.findOne({
        email,
        eventCode,
      });
        console.log("reg check.....",!isReg)
      if (isReg) {console.log("trigger...");
        return res.status(400).json({
          success: false,
          code: "REG_EXISTS",
          message: "You are already registered for this event",
          
        });
        //next();
      }
        res.status(201);
        next();
});
router.route('/pay').get(async(req,res)=>{

const data={
  name: 'Patini Praveen Kumar',
  email: 'Praveenhere333@gmail.com',
  college: 'NIY COLLEGE',
  phone: '8743923093',
  category: 'Esports',
  event: 'BGMI',
  eventCode: 'ESP_BGMI',
  cost: '500',
  paymentMode: 'Online',
  otp: '677031'
} ;


res.render('pay',{status:"success",data:data});
});
router.route('/offregister').post(isLoggedIn,controller.offregister);



router.route('/details').get((req,res)=>{
  res.sendFile('details.html' , { root : __dirname});
})
router.route('/onlinePayment').get(async(req,res)=>{
  const { tokenId}=req.query;
 
  const user = await eventReg.findOne({tokenId});
  console.log(user);
  if(user.paymentMode==="AtVenue"){
    res.render('suc',{user:user});
  }
  else{
  res.render('onlinepay',{user:user});
  }
});



module.exports= router;

