const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

//creating express app, initializing express
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/employees', {useNewUrlParser:true});
mongoose.Promise = global.Promise;


//built in middleware within express function, used to serve css & javascript files
app.use(bodyParser.json());
app.use("/", express.static("views"))

//homepage 
app.get("/api/get", (req,res)=>{
    res.send(req.body)
})

const port = process.env.PORT;
const ip = process.env.IP;

app.listen(port, ip, function(){
  console.log(`THE PORT IS WORKING ON: ${port}`);
  console.log(`THE IP IS WORKING ON: ${ip}`);
})