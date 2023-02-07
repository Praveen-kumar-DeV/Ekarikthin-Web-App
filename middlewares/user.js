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
     console.log(user);
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
      message: "Token is not valid",
    });
  }
};
