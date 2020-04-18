const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();



// use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/automation',require(path.join(__dirname,'./server/automation')))

app.listen(process.env.PORT || 5000,()=>{
    console.log('Application listening on port 5000!')
 })
 
 //Set up default mongoose connection
var mongoUrl = 'mongodb://heroku_7xrjtlvm:prp4o66e71471i0de825e258lp@ds239858.mlab.com:39858/heroku_7xrjtlvm';

mongoose.connect(mongoUrl,{
  useNewUrlParser:true
});

mongoose.connection.on('connected',()=>{
  console.log("mongoose is now connected to",mongoUrl)
});

mongoose.connection.on('error',(err)=>{
  console.log("error in mongoose connection",err);

mongoose.connection.on('disconnected',()=>{
  console.log("mongoose is now disconnected");
});

process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
      console.log('mongoose disconnected on process termination')
    });
  });
});