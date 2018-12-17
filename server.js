// Dependencies


var express = require("express");
var path = require("path");

var Html = require("./app/routing/htmlRoutes.js");
var Api = require("./app/routing/apiRoutes.js");


// set up express
var app = express();
var PORT = 3000;

// set up express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

  //Set the server to listen
  app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});



