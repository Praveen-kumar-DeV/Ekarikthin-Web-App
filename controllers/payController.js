const randToken = require("rand-token");
const Razorpay=require('razorpay');
const dotenv = require("dotenv");  //require dotenv package
dotenv.config({ path: "./config.env" })
//-------------------registration requirements-----------------------
const eventReg = require("../models/registermodel");
const key_id=process.env.YOUR_KEY_ID;
const key_secret= process.env.YOUR_KEY_SECRET;

var instance = new Razorpay({
    key_id: 'hduwqdpy239p81ye832u',
    key_secret: '821ye9ye781y7yytys',
  });

exports.orderCreate = async (req, res) => {
    const {email,eventCode,cost}=req.body;
    console.log(email,eventCode,cost);

    var options = {
        amount: cost,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      
      instance.orders.create(options, function(err, order) {
        console.log(order,options);
        res.send({orderId : order.id} );
      });


    
   
  };
  
  exports.paystat=async(req,res)=>{
     
 let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

 var crypto = require("crypto");
 var expectedSignature = crypto.createHmac('sha256', '<YOUR_API_SECRET>')
                                 .update(body.toString())
                                 .digest('hex');
                                 console.log("sig received " ,req.body.response.razorpay_signature);
                                 console.log("sig generated " ,expectedSignature);
 var response = {"signatureIsValid":"false"}
 if(expectedSignature === req.body.response.razorpay_signature)
  response={"signatureIsValid":"true"}
     res.send(response); 

  };