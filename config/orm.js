// MySQL Connection
var connection = require("../config/connection.js");


//Methods for MySql Commands

var orm = {

	//selectAll function
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM burgers" + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	//insertOne function
	insertOne: function( table, col, vals, cb) {
		var queryString =  "INSERT INTO" + table;


		queryString += " (";
		queryString += cols.toString();
		queryString += " )";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += " )";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},
	
	//updateOne function
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE" + table;

		queryString += "SET ";
		queryString += objToSql(objColVals);
		queryString += "WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result){
			if(err) {
				throw err;
			}

			cb(result);
		});
	},
	
};

module.exports = orm;