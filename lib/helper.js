var mysql = require('./database.js').mysql
	;

var sql = 'insert into rates (Date, Currency, Rate) values ?';

var database = function(data, cb){
	mysql.query(sql, [data], function(err, rows, fields){
		if(err){ console.log(rows); throw err; }
		console.log('Data has been inserted');
	});
};

var unix_to_date = function(unix_timestamp) {
	return new Date(unix_timestamp * 1000).toISOString().slice(0,10);
};

var cross_usd_rate = function(rate) {
	return (1/rate).toFixed(6);
};

exports.unix_to_date = unix_to_date;
exports.cross_usd_rate = cross_usd_rate;
exports.database = database;