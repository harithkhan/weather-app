import "./style.css";
import { parseCurrentWeather } from "./parse-weather-data";
import { parseDayWeather } from "./parse-weather-data";

// getWeatherData("Kuala Lumpur")
//     .then((weatherData) => {
//         console.log(weatherData);
//     })
//     .catch((error) => console.error(error))

// getWeatherData("London")
//     .then((weatherData) => {
//         console.log(weatherData);
//     })
//     .catch((error) => console.error(error))

parseCurrentWeather("Kuala Lumpur")
    .then((currentWeather) => {
        console.log(currentWeather);
        return currentWeather
    })
    .catch((error) => { console.error(error) })