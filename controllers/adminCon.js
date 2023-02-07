const cookieToken = require("../config/cookie-token");
const User = require("../models/user");
const eventReg = require("../models/registermodel.js");

exports.login = async (req, res) => {
    const { username, password } = req.body;
    
    console.log(req.body,"nothing..");
    
  
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
     console.log("logged in ...");
    cookieToken(user, res);
   //.redirect('/admin/data?valid='+token);
    console.log("here..!");
    
  };
  

exports.signup = async (req, res) => {
  console.log("sign up route...!");
  const { username, password ,eventCode ,role} = req.body;
  console.log(req.body);
  if (!(username && password)) {
    return res.status(400).json({
      message: "Please provide username and password",
    });
  }
  try {
    const user = await User.create({
      username,
      password,
      eventCode,
      role,
    });
    console.log(" account ceated...!");
    cookieToken(user, res, 201);
   // res.status(201).send("success...");
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
  //localStorage.removeItem("user");
  res.status(200).redirect('/admin/login'
  );
};

exports.getRegDetails = async (req, res) => {
  const { tokenId } = req.query;
  console.log("in datails...!")
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
  console.log('hello there...! pay')
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
      console.log('hello there...alredy checked id')
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
    await details.save();

    res.status(200).json({
      success: true,
      message: "Updated successfully",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};


exports.getAllRegistrations = async (req, res) => {
  try {
    const allRegs = await eventReg.find({});
    res.status(200).json({
      success: true,
      allRegs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};