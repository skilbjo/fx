var fs = require('fs'),
  path = require('path'),
  api = require('./api.js'),
  util = require('./util.js')
  ;

var generate_dates = function(year, cb){
  var start = new Date(year+'-10-01'),
    end = new Date(year+'-11-30'),
    result = []
    ;

  while(start <= end) {
    result.push(start.toISOString().slice(0,10));
    start = new Date(start.setDate(start.getDate()+1));
  }
  cb(result);
};

// ; for a collection of dates
generate_dates(2016,function(arr){
  arr.map(function(date,iterator){
    api.get_historical(date,function(data){
      util.database(data,function(result){
        console.log(result);
      });
    });
  });
});

// ; for a single date
// api.get_historical('2007-10-01',function(data){
//  util.database(data,function(result){
//    console.log(result);
//  });
// });

// ; reminder for how to use regularly
// api.get_latest(function(data){
//  util.database(data,function(result){
//    console.log(data);
//  });
// });
