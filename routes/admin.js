
const express=require('express');
const router=express.Router();
const controller=require('../controllers/adminCon');
const { isLoggedIn } = require("../middlewares/user");
const eventReg=require('../models/registermodel')
const csv   = require('csv-express');
const bodyParser = require("body-parser");


const cors=require('cors');
router.use(cors());



router.use(bodyParser.json()); // Configures bodyParser to accept JSON
router.use(bodyParser.urlencoded({
    extended: false
}));

router.use(express.static("public"));
router.route('/login').post(controller.login).get((req,res)=>{
    res.render('admin');
   
    });

router.route('/signup').post(controller.signup).get((req,res)=>{
    res.render('signup');
});
router.route('/update').get((req,res)=>{
    res.render('update');
});
router.route('/alldata').get((req,res)=>{
    res.render('details');
});

router.route("/logout").get(controller.logout);
router.route("/details").get(isLoggedIn, controller.getRegDetails);
router.route("/pay").get(isLoggedIn, controller.updatePay);
router.route('/data').get(async(req,res)=>{
    const result = await eventReg.find({},{
        createdAt:false,
  updatedAt:false,
  _id:false,
    });
    // console.log(result);
   // res.render('dash',{data:result });
   
   res.status(201).json({
   
    result,
   })
});
router.route('/see').get(async(req,res)=>{
    res.render('dash');
});


router.route('/exporttocsv').get(function(req, res, next) {
    var filename   = "Registrations.csv";
    var dataArray;
    eventReg.find().lean().exec({}, function(err, Registrations) {
        if (err) res.send(err);
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
        res.csv(Registrations, true);
    });
 });



module.exports= router;