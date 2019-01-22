// Dependencies


var express = require("express");

// set up express
var app = express();
var PORT = process.env.PORT || 8080;

// set up express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Require routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

  //Set the server to listen
  app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});



