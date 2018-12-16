//Index
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});

//Tables page
app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, "survey.html"));
});
