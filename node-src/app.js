var fs = require('fs'),
  path = require('path'),
  api = require('./api.js'),
  util = require('./util.js'),
  psql = util.psql
  ;

api.get_latest(function(data){
  util.database(data,function(result){
    console.log(result);
  });
});
