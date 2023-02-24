const express = require('express');
const app = express();
const connectDb = require("./config/database");
const dotenv = require("dotenv");  //require dotenv package
dotenv.config({ path: "../.env" }); //import config.env file
const path=require('path');
const bodyparser=require('body-parser');
const admin = require('./routes/admin');
const PORT = process.env.PORT||8080;
const cors = require('cors');
const cloudinary = require("cloudinary").v2;
const event = require('./routes/eventReg');
const gallery = require('./routes/gallery');

app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public/src'));
app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended : false}));   
app.use(bodyparser.json());


connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
}); 

//route handlers

app.use('/',event);
app.use('/admin', admin);
app.use('/gallery',gallery);



// Error handling...
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});




// MAIN PROGRAM.........






if (process.env.NODE_ENV === "PRODUCTION") {
  console.log(process.env.NODE_ENV)
  app.use(express.static(path.join(__dirname+"/public/src")));

  app.get("/Events", (req, res) => {
    res.sendFile(path.resolve(__dirname+"/public/src/events.html"));
  });
  app.get("/Organisers", (req, res) => {
    res.sendFile(path.resolve(__dirname+"/public/src/organisers.html"));
  });
  app.get("/Gallery", (req, res) => {
    res.sendFile(path.resolve(__dirname+"/public/src/gallery.html"));
  });


  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname+"/public/src/index.html"));
  });
}






const server = app.listen(PORT, () => {
    console.log(
      `Server started on PORT: ${PORT} in ${process.env.NODE_ENV} mode.`
    );
  });
 
 
 
  // Error handling...
  process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err.stack}`);
    console.log("Shutting down the server due to Unhandled Promise rejection");
    server.close(() => {
      process.exit(1);
    });
  });