var fs = require('fs'),
  path = require('path'),
  api = require('./api.js'),
  psql = require('./database.js').psql,
  util = require('./util.js')
  ;

api.get_latest(function(data){
  util.database(data,function(result){
    setTimeout(function() {
      psql.end();
    }, 15 * 1000);
  });
});
