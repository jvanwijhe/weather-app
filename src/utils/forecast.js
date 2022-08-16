const request = require('request')

const forecast = (latitude, longitude, callback) => {
  
  const url = 'http://api.weatherstack.com/current?access_key=00948ef73fa704c2ae02cc5f10cd3743&query=' + latitude + ',' + longitude 
  
  request({ url, json: true }, (error, { body }) => {

    if (error) {
      callback('unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('unable to find location', undefined)
    } else {
      callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out')
    }
  })
}

module.exports = forecast
