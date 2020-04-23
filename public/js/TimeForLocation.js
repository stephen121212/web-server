const weatherFormT = document.querySelector('form')
const cityT = document.getElementById('cityName')
const countryT = document.getElementById('countryCode')
const textForTime = document.getElementById('txt')

weatherFormT.addEventListener('submit', (e) => {
    e.preventDefault()
        const cityName = (cityT.value).trim()
        const countryCode = countryT.options[countryT.selectedIndex].value
        fetchTime(cityName, countryCode)        
})

function fetchTime (cityName, countryCode){
    fetch('/time?cityName=' + cityName + '&countryCode=' + countryCode).then((response) => {
        response.json().then((data) => {
            if(data.error){
                textForTime.innerHTML = data.error
            }
                textForTime.innerHTML = data.formattedTime
            })
    })    
    setTimeout(fetchTime(cityName, countryCode), 1000);
}