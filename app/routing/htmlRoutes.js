//Index page


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});

//survey page
app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, "survey.html"));
});
module.exports = Html;