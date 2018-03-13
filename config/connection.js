// MySQL Connection
var mysql = require("mysql");

var connection = mysql.createConnection ({
	host:"localhost",
	port:"3306",
	user:"root",
	password:"",
	database: "burger_db"
});

// Make Connection
 module.exports = connection;
