const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const degrees = document.getElementById('degrees')
const Weatherlocation = document.getElementById('location')
const WeatherCurrently = document.getElementById('weatherCurrently')
const WeatherDescription = document.getElementById('descriptionOfWeather')
const Humidity = document.getElementById('humidity')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    
    fetch('http://localhost:3000/weather?search=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            Weatherlocation.innerHTML = data.error
        }
        console.log(data)
            Weatherlocation.innerHTML = data.nameOfCity + ', ' + data.countryOfCity
            degrees.innerHTML = data.temperatureValue 
            WeatherCurrently.innerHTML = data.weatherCurrently
            WeatherDescription.innerHTML = data.weatherDescription
            Humidity.innerHTML = data.weatherHumidity
        })
    })
})

