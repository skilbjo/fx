var fs = require('fs'),
  path = require('path'),
  api = require('./node-src/api.js'),
  psql = require('./node-src/database.js').psql,
  util = require('./node-src/util.js')
  ;

api.get_latest(function(data){
  util.database(data,function(result){
    setTimeout(function() {
      psql.end();
    }, 15 * 1000);
  });
});
