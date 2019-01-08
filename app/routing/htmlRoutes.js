//dependencies (required npm packages)
    //Will use path here
var path = require("path");

module.exports = function(app){

    //GET route to "./public/survey.html" which should display the survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    //default, catch-all route to "./public/home.html" which displays the home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}