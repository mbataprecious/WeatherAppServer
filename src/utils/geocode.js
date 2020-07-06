const request = require('request')

const geocode = (address, callback) => {
    console.log(address)
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + 
    '.json?access_token=pk.eyJ1IjoicHJlY2lvdXNuYXp6eSIsImEiOiJja2M4aWdrbGIwMnd2MnlsazJlZm54NXRuIn0.A0xjQik1x92Insshsa2mkA&limit=1'
    request({ url, json: true }, (error, response,body ) => {
        // console.log('line8',JSON.stringify(response,null,2))
        if (error) {
        //    console.log('line11',JSON.stringify(error,null,2))
        
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode