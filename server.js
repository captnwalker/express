// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//bbb
// Sets up the Express App
// =============================================================
var app = express();
//var PORT = 7000;
var PORT = process.env.PORT || 3100;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  



// =============================================================
app.listen(PORT, function() {
    console.log("FF App listening on PORT " + PORT);
  });
  