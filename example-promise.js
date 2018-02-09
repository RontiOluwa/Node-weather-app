// function doWork (data, callback) {
// 	callback('done');
// 	callback('done second')
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			reject('everything is broken!');
// 		}, 1000);
// 		// reject({
// 		// 	error: 'something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('some data').then(function (data) {
// 	console.log(data);
// }, function (error) {
// 	console.log(error);
// });

var request = require('request');

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://samples.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&appid=b6907d289e10d714a6e88b30761fae22';

		if (!location) {
			return reject('No location provided');
		}

		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
}

getWeather('san francisco').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error);
});







