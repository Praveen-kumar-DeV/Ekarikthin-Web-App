const mongoose = require("mongoose");

const countSchema = new mongoose.Schema(
  {
    serial: {
      type: String,
      required: true,
    },
    
    count: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Count = mongoose.model("Count", countSchema);

module.exports = Count;
