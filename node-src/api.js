var 
	path = require('path'),
	fs = require('fs'),
	req = require('request'),
	api_key = require('./lib/key.js').OPEN_EXCHANGE_RATES_KEY,
	dir = './data',
	h = require('./lib/helper.js'),
	api_call = require('./lib/result.js')
	;

var api = {
	protocol: 'https://',
	get base () { 
		return this.protocol+'openexchangerates.org/api/';
	},
	app_id: '?app_id='+api_key,
	get latest () { 
		return this.base +'latest.json'+this.app_id;
	},
	get currencies () {
		return this.base+'currencies.json'+this.app_id;
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

var transform = function(data, cb){
	data = JSON.parse(data);

	var date = h.unix_to_date(data.timestamp),
		result = [];

	data = data.rates;

	for(var key in data) { if (data.hasOwnProperty(key)){
		result.push([ date , key , h.cross_usd_rate(data[key]) ]);
	}	}

	cb(result);
};

var get_historical = function(date,cb) {
	request(api.base+'historical/'+date+'.json'+api.app_id, function(data){
		transform(data,function(data){
			cb(data);
		});
	});
};

var get_latest = function(cb){
	request(api.latest, function(data){
		transform(data,function(data){
			cb(data);
		});
	});
};

exports.get_historical = get_historical;
exports.get_latest = get_latest;
