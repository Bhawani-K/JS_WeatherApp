const API_KEY = '827ab4bb33bebecd5a5d82e5a4517a7d'
let cityName = 'Brahmapur';
function getWeatherData(cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    // Fetch the data from the OpenWeatherMap API
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // Extract the weather data
            var temperature = data.main.temp;
            var humidity = data.main.humidity;
            var weather = data.weather[0].description;

            // Log the weather data to the console
            console.log("Temperature: " + temperature + "°C");
            console.log("Humidity: " + humidity + "%");
            console.log("Weather: " + weather);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}
getWeatherData(cityName)