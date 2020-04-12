const express = require('express')
const path = require('path')
const fs  = require('fs')
const hbs = require('hbs')
const request = require('postman-request');

const app = express()
// Define paths for Express config
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'MyWeatherPal',
        name: 'Stephen King'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    var cityName = req.query.search
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=6c1ac23921559b3a3fd8ebbd9ecb5646'
    request(url, function (error, response, body) {
        if(error){
            return res.send({error})
          } else if(response.statusCode === 200) {
                const weatherObject = JSON.parse(body)
                res.send({
                    nameOfCity: weatherObject.name,
                    countryOfCity: weatherObject.sys.country,
                    weatherCurrently: weatherObject.weather[0].main,
                    weatherDescription: weatherObject.weather[0].description,
                    weatherHumidity: weatherObject.main.humidity + "%",
                    temperatureValue: (weatherObject.main.temp - 273.15).toFixed(2) + "°C"
                })
        } else {
            res.send({
                error: "Invalid Location has been inserted"
            })
        } 
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        error: 'Error 404 -Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})