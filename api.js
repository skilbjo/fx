var 
	path = require('path'),
	fs = require('fs'),
	req = require('request'),
	sync = require('synchronize'),
	sleep = require('sleep'),
	dir = './data',
	h = require('./lib/helper.js')
	;

var api = {
	protocol: 'http://',
	get base () { 
		return this.protocol+'api.fixer.io/';
	},
	get latest () { 
		return this.base +'latest/';
	},
	get used () { 
		return this.thread_url + '#p'; 
	},
	get image () {
		return this.protocol+'i.4cdn.org/';
	}
};

var request = function(url, cb){
	req(url, function(err,res,body){
		if(!err && res.statusCode == 200){
			if (typeof(cb) == 'function') { 
				cb(body); 
			}
		}
	});
};

var getBoards = function(cb) {
	request(api.base + 'boards.json', function(res){
		if (typeof(cb) == 'function') { cb(res); }		
	});
};
