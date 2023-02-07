
const express=require('express');
const router=express.Router();
const cors=require('cors');
const controller=require('../controllers/controller');
const bodyparser=require('body-parser');
const paycon=require('../controllers/payController');
const eventReg = require("../models/registermodel");




router.use(cors());
router.use(bodyparser.urlencoded({extended : true}));
router.use(bodyparser.json());

router.use(express.static("public"));
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

router.route('/order').post(paycon.orderCreate);
//router.route('/verify').post(controller.verify);
router.route('/paystat').post(paycon.paystat);
router.route('/details').get((req,res)=>{
  res.sendFile('details.html' , { root : __dirname});
})

module.exports= router;