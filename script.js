const timeEle = document.getElementById('time');
const dateEle = document.getElementById('date')
const currentWeatherItemsEle = document.getElementById('currentWeatherItems')
const timezoneEle = document.getElementById('time-zone')
const countryEle = document.getElementById('country')
const weatherForecastEle = document.getElementById('weather-forecast')
const currentTempEle = document.getElementById('current-temp')
const weatherIconEle = document.getElementById('w-icon')

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
const months = [
    'Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July',
    'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
]
let cityName = 'Brahmapur';
function getWeatherData(cityName) {
    
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    // Fetch the data from the OpenWeatherMap API
    setInterval(() => {
        fetch(API_URL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                // Extract & convert date
                const date = new Date(data.dt * 1000);
                const month = date.getMonth()
                const day = date.getDay()
                const getdate = date.getDate()
                // get WeatherDetails
                weatherIconEle.innerHTML= data.weather[0].icon
                // const dateOnly = date.toLocaleDateString();
                const timeOnly = date.toLocaleTimeString();
                dateEle.innerHTML = days[day] + ',' + getdate + months[month];
                timeEle.innerHTML = timeOnly;
                // Latitude & Longitude
                const getLat = data.coord.lat;
                const getLon = data.coord.lon;
                // Get Location Details
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${getLat}&longitude=${getLon}&localityLanguage=en`)
                .then(response => response.json())
                .then(function(dataEle){
                    timezoneEle.innerHTML = dataEle.city+'<br>' +dataEle.principalSubdivision
                    countryEle.innerHTML = dataEle.countryName
                })
            })
            .catch(function (error) {
                console.log("Error: " + error);
            });
    }, 1000)

}
getWeatherData(cityName)