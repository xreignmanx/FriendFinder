//  Dependencies
  var friendsList = require('../data/friends');
  
  //Routing for exports
// Get info from friends list
  module.exports = function(app){

      app.get('/api/friends', function(req, res){
          res.json(friendsList);
      });
// Post to friends list    
      app.post('/api/friends', function(req, res){

// Create function to handle user input and compare it to
// the friendsList.
          friendsList.push(req.body);
      })
  }

// Create a function that will loop through the scores
// and find the Friend with the least amount of diffences.