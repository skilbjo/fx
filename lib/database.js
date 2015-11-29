var mysql = require('mysql').createConnection({
		host: 'localhost',
		user: 'root',
		database: 'fx'
	})
	;

exports.mysql = mysql;