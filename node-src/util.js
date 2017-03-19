var pg = require('pg'),
    parse = require('pg-connection-string').parse,
    psql = require('pg').Pool,
    pool = new psql(parse(process.env.db_uri))
  ;

var unix_to_date = function(unix_timestamp) {
  return new Date(unix_timestamp * 1000).toISOString().slice(0,10);
};

var cross_usd_rate = function(rate) {
  return (1/rate).toFixed(6);
};

var database = function(data,cb){
  var sql = 'insert into dw.rates (date, currency, rate) ' +
            'values ($1,$2,$3)'
  ;

  pool.connect(function(err,client,done){
    data.map(function(item,index){
      client.query(sql, item, function(err,result){
        done(err);
        if(err) { return console.error('error running query', err); }
        cb(result.rows);
      });
    });
  });
};

exports.unix_to_date = unix_to_date;
exports.cross_usd_rate = cross_usd_rate;
exports.database = database;
