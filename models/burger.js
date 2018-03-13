// Importing ORM
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res){
			cb(result);
		});
	},

	insertOne: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(result){
			cb(result);
		});
	},

	updateOne: function(objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function(result) {
			cb(result);
		});
	},

	devour: function(condition, cb) {
		orm.delete("burgers", condition, function(result) {
			cb(result);
		});
	}

};


module.exports = burger;