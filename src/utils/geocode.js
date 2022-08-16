const request = require('request')

const geocode = (address, callback) => {
  const url = 'http://api.positionstack.com/v1/forward?access_key=568fb70d1ae6fbb36cb88af99ee06da8&query=' + encodeURIComponent(address) + '&output=json'

  request({ url, json: true}, (error, { body } = {} ) => {
    if (error) {
      callback('Unable to connect to location services', undefined)
    } else if (body.data.length === 0) {
      callback('Unable to find location. Try another search', undefined)
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].name
      })
    } 
  }) 
}

module.exports = geocode
