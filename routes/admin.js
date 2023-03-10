
const express=require('express');
const router=express.Router();
const controller=require('../controllers/adminCon');
const { isLoggedIn ,isAdmin} = require("../middlewares/user");

const csv   = require('csv-express');
const bodyParser = require("body-parser");


router.route('/update').get((req,res)=>{
    res.render('update');
    
});
router.route('/alldata').get( (req,res)=>{
    res.render('details');
   
});

router.route('/receipt').get( (req,res)=>{
   
    res.render('print');
    
});

router.route("/logout").get(controller.logout);
router.route("/details").get(isLoggedIn, controller.getAllRegistrations);
router.route("/pay").get(isLoggedIn,isAdmin, controller.updatePay);
router.route('/data').get(isLoggedIn,controller.dashData);


router.route('/userDash').get(async(req,res)=>{
    res.render('userdash');
});
router.route('/DashBoard').get(async(req,res)=>{
   res.render('dash');
});
router.route('/headUserDash').get(async(req,res)=>{

    res.render('headdash');
   
});
router.route('/headData').get( (req,res)=>{
    res.render('alldata');
   
});

router.route('/login').post(controller.login).get((req,res)=>{
    res.render('newadmin');
   });

router.route('/signup').post(isLoggedIn,isAdmin,controller.signup).get((req,res)=>{
    res.render('signup');
});

router.route("/print").post(isLoggedIn,controller.print);
router.route('/exporttocsv').post(isLoggedIn,controller.CSVdownload);
router.route('/offlineRegister').get((req,res)=>{
    res.render('offregister');
});


module.exports= router;