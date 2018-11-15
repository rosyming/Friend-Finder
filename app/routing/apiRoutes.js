
// Load Data by linking routes to friends data source
var friendData = require("../data/friends");

// Routing
module.exports = function(app) {
  // When a user visits API Friends List link, they are shown JSON of data in the table
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // When user submits friend data
  app.post("/api/friends", function(req, res) {
    friendData.push(req.body);
      res.json(true);
  });
};
