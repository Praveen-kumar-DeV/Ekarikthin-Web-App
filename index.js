const express = require('express');
const app = express();
const connectDb = require("./config/database");
const dotenv = require("dotenv");  //require dotenv package
dotenv.config({ path: "./config.env" }); //import config.env file
const path=require('path');
const bodyparser=require('body-parser');
const admin = require('./routes/admin');
const PORT = process.env.PORT;
const cors = require('cors');
const event = require('./routes/eventReg');

app.use(express.urlencoded({
  extended: true
}));
app.set('view engine','ejs');
app.use(cors());
app.use(express.static("public"));
app.use('/',event);
app.use('/admin', admin);

// Error handling...
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});




// MAIN PROGRAM.........

connectDb();
app.use(bodyparser.urlencoded({extended : false}));   
app.use(bodyparser.json());



//app.get("/",register);
//app.get('/',(req,res)=>{
 // res.sendFile(__dirname+"/public/index.html");
//});




if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "./public")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"));
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