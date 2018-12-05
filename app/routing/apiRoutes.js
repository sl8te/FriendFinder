
var friends = require("../data/friends.js");

module.exports = function(app){

    //GET route with the url "/api/friends" ; it will display a JSON of all possible friends
    app.get("/api/friends", function(req, res){
        res.json(friendsArray);
    });

    //POST route "/api/friends" ; this will be used to handle incoming survey calls. Also used to handle the compatibility logic.
    app.post("/api/friends", function(req, res){
        friendsArray.push(req.body);
        res.json();
    })
}