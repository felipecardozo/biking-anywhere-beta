var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
	res.render("index", {
		title: "Title page",
		message:"Hallo !!"
	});
});

router.get("/profile", function(req, res){
	res.render("profile", {
		title: "Account",
		message: "here goes the content for profile",
		newobject : "algun mensaje"
	});
});

router.get("/search", function(req, res){
	res.render("search", {
		title: "Search Page"
	});
});

module.exports = router;