//Dependencies
var path = require("path");
// Import module for (app)
module.exports = function(app) {
// Create path for Home Page

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

//Create path for the Survey Page
app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
};