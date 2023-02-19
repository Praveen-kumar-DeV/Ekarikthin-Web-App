const cookieToken = (user, res, statusCode = 200) => {
    const token = user.getJwtToken();
  
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_TIMEOUT * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    user.password = undefined;
    
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      token,
      user,
    });
    //return{statusCode,token,options};
  };
  
  module.exports = cookieToken;