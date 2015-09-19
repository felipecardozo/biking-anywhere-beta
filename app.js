var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//call express constructor
var app = express();

//configure app
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//use middleware
app.use( express.static( path.join(__dirname, "public") ) );
//deprecated >> app.use(bodyParser()); now use:
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//define routes
app.use(require("./routes"));

var port = process.env.PORT || 1234;
app.listen(port, function(){
	console.log("ready on port " + port );
});