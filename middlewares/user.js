const jwt = require("jsonwebtoken");
const User = require("../models/user");

const getToken = (from) => {
  return from && from.token;
};

exports.isLoggedIn = async (req, res, next) => {
  const headAuth = req.header("Authorization");

  const token =
    req.query.valid||
    getToken(req.cookies) ||
    getToken(req.body) ||
    (headAuth && headAuth.split(" ")[1]);
   
   
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No AUTH_TOKEN provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findById(decoded.id);
     
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid user",
      });
    }

    req.user = user;
   
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "UNAUTHORIZED ACCESS...!",
    });
  }
};



exports.isAdmin = async (req, res, next) => {
  const headAuth = req.header("Authorization");

  const token =
    req.query.valid||
    getToken(req.cookies) ||
    getToken(req.body) ||
    (headAuth && headAuth.split(" ")[1]);
     

  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   
    const user = await User.findById(decoded.id);
   
    if (!(user.role==="admin")) {
      return res.status(401).json({
        success: false,
        message: "NOT AN ADMIN",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "UNAUTHORIZED ACCESS.!",
    });
  }
};


exports.isMain = async (req, res, next) => {
  const headAuth = req.header("Authorization");

  const token =
    req.query.valid||
    getToken(req.cookies) ||
    getToken(req.body) ||
    (headAuth && headAuth.split(" ")[1]);
     
    
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   
    const user = await User.findById(decoded.id);
   
    if (!(user.role==="admin_main")) {
      return res.status(401).json({
        success: false,
        message: "NOT AN ADMIN",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "UNAUTHORIZED ACCESS.!",
    });
  }
};



exports.isTime = async (req, res, next) => {
  
  
  const currentDate = new Date();
const setDate = new Date('2023-03-09');

if (currentDate < setDate) {
  
  next();
} else if (currentDate >=setDate) {
  
 return res.render('closed');
} 
   
   
 
  
};

