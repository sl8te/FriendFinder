//GET route with the url "/api/friends" ; it will display a JSON of all possible friends
app.get("/api/friends", function(req, res){
    return res.json(friendsArray);
});
//POST routes "/api/friends" ; this will be used to handle incoming survey calls. Also used to handle the compatibility logic.
app.post("/api/friends", function(req, res){
    var newFriend = req.body;

})