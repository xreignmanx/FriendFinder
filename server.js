// Dependencies


var express = require("express");
var path = require("path");

// set up express
var app = express();
var PORT = 3000;

// set up express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());





