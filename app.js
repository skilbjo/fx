var fs = require('fs'),
  path = require('path'),
  api = require('./api.js'),
  h = require('./lib/helper.js')
  ;

api.get_latest(function(data){
  h.database(data,function(result){
    setTimeout(function() {
      psql.end(function(err){
        if(err) console.log(err);
      });
    }, 15 * 1000);
  });
});
