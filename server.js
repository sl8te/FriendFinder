//dependencies (required npm packages)
var express = require("express");

//setting up the express app
var app = express();
var PORT = process.env.PORT || 8080;

//telling the express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routing 
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//tells the server to begin listening
app.listen(PORT, function(){
    console.log("App is listening to PORT " + PORT);
});