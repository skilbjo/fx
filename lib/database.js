var mysql = require('mysql').createConnection({
    host: 'localhost',
    user: 'root',
    database: 'fx'
  })
  ;

var pg = require('pg'),
    conString = 'postgres://skilbjo:password@localhost:5432/fx',
    psql = new pg.Client(conString)
  ;

exports.mysql = mysql;
exports.psql = psql;
