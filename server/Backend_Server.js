const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const Login =  require("../src/App")
// mongoose.Promise = global.Promise;

// let promise = mongoose.connect('mongodb://localhost:27017/bookstore', { UseNewUrlParser: true});
// let promise = 'mongodb+srv://edapecommongodb:edapecommongodb@cluster0.wxm98.mongodb.net/?retryWrites=true&w=majority'
let promise = 'mongodb+srv://edapecommongodb:mongodbedapecom@cluster0.wxm98.mongodb.net/?retryWrites=true&w=majority'

// promise.then((db)=>{
//     console.log('Connected');
// });


//home route
app.get('/', (req, res)=>{
    res.sendFile(__dirname + Login);
});

app.listen(5000);
console.log('app running at http://localhost:3000');