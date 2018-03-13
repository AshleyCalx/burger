CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
		id INT (11) AUTO_INCREMENT NOT NULL,
		burger_name VARCHAR(40) NOT NULL,
		devoured BOOLEAN,
		date TIMESTAMP,
		PRIMARY KEY(id)
);

SELECT * FROM burgers;


