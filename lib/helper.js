var mysql = require('./database.js').mysql,
  psql = require('./database.js').psql
  ;

var sql = 'insert into rates (date, currency, rate) values ?';

//var database = function(data, cb){
  //// console.log(data);
  //mysql.query(sql, [data], function(err, rows, fields){
    //if(err){ console.log(rows); throw err; }
    //console.log('Data has been inserted');
    //mysql.end();
  //});
//};

var database = function(data, cb){
  psql.connect(function(err){
    psql.query(sql, function(err,result){
      if(err) console.log(err);
      cb(result.rows);
      psql.end(function(err){
        if(err) console.log(err);
      });
    });
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
