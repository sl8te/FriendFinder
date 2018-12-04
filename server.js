//dependencies (required npm packages)
var express = require("express");
var path = require("path");

//setting up the express app
var app = express();
var PORT = process.env.PORT || 2020;

//telling the express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//tells the server to begin listening
app.listen(PORT, function(){
    console.log("App is listening to PORT " + PORT);
})