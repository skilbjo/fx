var fs = require('fs'),
	path = require('path'),
	api = require('./api.js'),
	h = require('./lib/helper.js')
	;

api.get_latest(function(data){
	h.database(data,function(result){
		console.log(data);
	});
});
