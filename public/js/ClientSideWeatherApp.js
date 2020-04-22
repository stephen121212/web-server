const weatherForm = document.querySelector('form')
const city = document.getElementById('cityName')
const country = document.getElementById('countryCode')
const degrees = document.getElementById('degrees')
const weatherlocation = document.getElementById('location')
const todayDegrees = document.getElementById('todayDegrees')
const todayLocation = document.getElementById('todayLocation')
const currentWeather = document.getElementById('weatherCurrently')
const weatherDescription = document.getElementById('descriptionOfWeather')
const humidity = document.getElementById('humidity')
const weatherImage = document.getElementById("weatherImage")
const windSpeed = document.getElementById("windSpeed")
const visibility = document.getElementById("visibility")
const pressure = document.getElementById("pressure")
const locationInformation = document.getElementById("locationInformation")

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const cityName = (city.value).trim()
    const countryCode = country.options[country.selectedIndex].value
    
    fetch('/weather?search=' + cityName + ',' + countryCode).then((response) => {
    response.json().then((data) => {
        if(data.error){
            Weatherlocation.innerHTML = data.error
        }
            console.log(data)
            weatherlocation.innerHTML = data.nameOfCity + ', ' + data.countryOfCity
            degrees.innerHTML = data.temperatureValue 
            todayLocation.innerHTML = data.nameOfCity + ', ' + data.countryOfCity
            todayDegrees.innerHTML = data.temperatureValue 
            currentWeather.innerHTML = data.weatherCurrently
            weatherDescription.innerHTML = data.weatherDescription
            humidity.innerHTML = data.weatherHumidity
            pressure.innerHTML = data.Pressure
            locationInformation.innerHTML = data.nameOfCity
            windSpeed.innerHTML = data.windSpeed
            visibility.innerHTML = data.visibility

            switch(data.weatherDescription){
                case "light rain": weatherImage.src = "/img/Rain.png"
                break
                case "moderate rain": weatherImage.src = "/img/Rain.png"
                break
                case "very heavy rain": weatherImage.src = "/img/Rain.png"
                break
                case "broken clouds": weatherImage.src = "/img/BrokenClouds.png"
                break
                case "overcast clouds": weatherImage.src = "/img/BrokenClouds.png"
                break
                case "scattered clouds": weatherImage.src = "/img/ScatteredClouds.png"
                break
                case "few clouds": weatherImage.src = "/img/ScatteredClouds.png"
                break
                case "snow": weatherImage.src = "/img/Snow.png"
                break
                case "sky is clear": weatherImage.src = "/img/Sunny.png"
                break
                case "clear sky": weatherImage.src = "/img/Sunny.png"
                break
                default: weatherImage.src = "/img/ScatteredClouds.png"
            }
        })
    })
})

