// Path package to get the correct file path for our html
var path = require("path");

// Routing
module.exports = function(app) {
  // Route for when a user clicks the Go To Survey Button and directs to the survey HTML page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
