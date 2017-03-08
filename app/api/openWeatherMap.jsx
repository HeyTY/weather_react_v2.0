const axios 	= require("axios");




const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?&appid=b8da50a3402251dc69e10171370ca774&units=imperial";

function getTemp (location) {
	var encodedLocation = encodeURIComponent(location)
	var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

	return axios.get(requestUrl).then(function (res) {
		if (res.data.cod && res.data.message) {
			throw new Error (res.data.message)
		} else {
			return res.data.main.temp;
		}
	}, function(err) {
		throw new Error(err.response.data.message);
	});
}

module.exports = {
	getTemp
};

// module.exports = {

// 	 getTemp: function (location) {
// 		var encodedLocation = encodeURIComponent(location)
// 		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

// 		return axios.get(requestUrl).then(function (res) {
// 			if (res.data.cod && res.data.message) {
// 				throw new Error (res.data.message)
// 			} else {
// 				return res.data.main.temp;
// 			}
// 		}, function(res) {
// 			throw new Error(res.data.message);
// 		});
// 	}

// }
