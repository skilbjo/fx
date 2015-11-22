var 
	path = require('path'),
	fs = require('fs'),
	req = require('request'),
	api_key = require('./lib/key.js').OPEN_EXCHANGE_RATES_KEY
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

var filter = function(data, cb){
	var result = [];

	data = data.rates;

	for (var key in data) {
		if (data.hasOwnProperty(key)){
			result.push({
				currency: key,
				rate: data[key]
			});
		}
	};


	// data.map(function(item,index){
	// 	console.log(item);
	// });

	// data_json = JSON.parse(JSON.stringify(data.rates));

	// data_json.map(function(item,index){
	// 	console.log(item);
	// });


	// data.map(function(item,index){
	// 	item = item.rates;
	// 	item.map(function(rate,index){
	// 		result.push({
	// 			currency: rate[index],
	// 			rate: rate[index]
	// 		});
	// 	});
	// });

	cb(data);
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

var get_historical = function(date) {
	return api.base+'historical/'+date+'.json'+api.app_id
}

// console.log(api_call);

filter(api_call,function(data){
	console.log(data);
});

// request(get_historical('2015-01-01'),function(data){
// 	console.log(data);
// });

// request(get_historical('2015-01-01'),function(json){
// 	filter(json,function(json){
// 		console.log(json);
// 	});
// });