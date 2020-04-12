const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const degrees = document.getElementById('degrees')
const Weatherlocation = document.getElementById('location')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    
    fetch('http://localhost:3000/weather?search=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            Weatherlocation.innerHTML = data.error
        }
            Weatherlocation.innerHTML = data.nameOfCity + ' ' + data.countryOfCity
            degrees.innerHTML = data.temperatureValue 
        })
    })
})

