const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  email: String,
  otp: Number,
  expireTime: Number,
  verified:{type:Boolean,
    default: false,}
});

module.exports = mongoose.model("Otp", OtpSchema);