var pg = require('pg'),
    conString = process.env.db_uri,
    psql = new pg.Client(conString),
    psql_pool = require('pg').Pool,
    pool = new psql_pool(conString)
  ;

var sql = 'insert into dw.rates (date, currency, rate) ' +
          'values ($1,$2,$3)';

var database = function(data, cb){
  psql.connect(function(err){
    data.map(function(item,index){
      psql.query(sql, item, function(err,result){
        if(err) console.log(err);
        cb(result.rows);
      });
    });
  });
};

var database_pool = function(data, cb){
  pool.query('select $1::text as name', ['foo'], function(err,result){
    console.log(result);
  });
};

var database_pool_insert = function(data, cb){
  data.map(function(item,index){
    pool.query(sql, item, function(err,result){
      if(err) console.log(err);
      cb(result.rows);
    });
  });
};

var db_pool_insert = function(data,cb){
  pool.connect(function(err,client,done){
    data.map(function(item,index){
      client.query(sql, item, function(err,result){
        done(err);
        if(err) {
          return console.error('error running query', err);
        }
        cb(result.rows);
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

exports.psql = psql;
exports.unix_to_date = unix_to_date;
exports.cross_usd_rate = cross_usd_rate;
exports.database = database;
exports.database_pool = database_pool;
exports.database_pool_insert = database_pool_insert;
exports.db_pool_insert = db_pool_insert;
