var fs = require('fs'),
	path = require('path'),
	api = require('./api.js'),
	h = require('./lib/helper.js')
	;

var generate_dates = function(year, cb){
	var start = new Date(year+'-01-01'),
		end = new Date(year+'-12-31'),
		result = []
		;

	while(start <= end) {
		result.push(start.toISOString().slice(0,10));
		start = new Date(start.setDate(start.getDate()+1));
	}

	cb(result);
};

generate_dates(2002,function(arr){
	arr.map(function(date,iterator){
		api.get_historical(date,function(data){
			h.database(data,function(result){
				console.log(result);
			});
		});
	});
});



// api.get_historical('2007-10-01',function(data){
// 	h.database(data,function(result){
// 		console.log(result);
// 	});
// });

// api.get_latest(function(data){
// 	h.database(data,function(result){
// 		console.log(data);
// 	});
// });
