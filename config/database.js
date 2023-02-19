const mongoose = require("mongoose");
const dotenv = require("dotenv");  //require dotenv package
dotenv.config({ path: "./.env" }); //import config.env file

const DB = process.env.DATABASE;  

mongoose.set('strictQuery', false);
const connectDb = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`Successfully Connected DB to HOST : ${conn.connection.host}`);
    });
};

module.exports = connectDb;