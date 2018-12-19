//  Dependencies
  var friendsList = require('../data/friends.js');
  var path = require('path');
  
  //Routing for exports
// Get info from friends list
  module.exports = function(app){
      app.get('/api/friends', function(req, res){
          res.json(friendsList);
      });
// Post to friends list    
      app.post('/api/friends', function(req, res){
          friendsList.push(req.body);
      })
  }