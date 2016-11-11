var mysql = require('mysql').createConnection({
    host: 'localhost',
    user: 'root',
    database: 'fx'
  })
  ;

var pg = require('pg').Client();

var psql = pg.connect(function(err){
  psql.query(sql, function(err,result){
    if(err) consol.log(err);
    cb(result.rows, psql);
  })
});

exports.mysql = mysql;
exports.psql = psql;
