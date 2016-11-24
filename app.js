var fs = require('fs'),
  path = require('path'),
  api = require('./api.js'),
  psql = require('./lib/database.js').psql,
  h = require('./lib/helper.js')
  ;

api.get_latest(function(data){
  h.database(data,function(result){
    setTimeout(function() {
      psql.end();
    }, 15 * 1000);
  });
});
