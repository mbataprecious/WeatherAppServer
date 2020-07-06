const request = require('request')

const forecast = (latitude, longitude, callback) => {
    console.log('4',latitude,longitude)

    var url= 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=b8a193bea415ca62d795f3728a210ce2'
    console.log(url)

    request({ url, json: true }, (error,  res, body ) => {
        console.log('line8',JSON.stringify(res,null,2))
        if (error) {
            console.log('line8',JSON.stringify(error,null,2))
            callback('Unable to connect to weather service!', undefined)
        } else if (res.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, res.body.weather[0].description + ' It is currently ' + res.body.main.temp + ' degress now. There is a ' + (100-res.body.main.humidity )+ '% chance of rain.')
        }
    })
}

module.exports = forecast