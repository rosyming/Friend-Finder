// Requiring Express npm package

var express = require("express");

// Setting up express server
var app = express();

// Setting up port
var PORT = process.env.PORT || 8000;

// Setting up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Directing server to routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener to start the server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
