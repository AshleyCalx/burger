var express = require("express");
var router = express.Router();


//Import burgers.js to use database functions
var burgers = require("../models/burgers.js");

// Create routes and logic within routes

router.get("/", function(req, result) {
	burger.selectAll(function(data){
		var
	})
})