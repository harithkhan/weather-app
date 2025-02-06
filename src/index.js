import "./style.css";
import { parseCurrentWeather, parseDayWeather, parseWeekWeather } from "./parse-weather-data";
import { getWeatherData } from "./weather-api";

getWeatherData("Kuala Lumpur")
    .then((weatherData) => {
        if (!weatherData) {
            console.log("Weather data unavailable");
        };
        console.log(weatherData);
    })
    .catch((error) => { console.error(error) });

parseCurrentWeather("Kuala Lumpur")
    .then((currentWeather) => {
        if (!currentWeather) {
            console.log("Weather data unavailable");
        };
        console.log(currentWeather);
        return currentWeather
    })
    .catch((error) => { console.error(error) })

parseDayWeather("Kuala Lumpur")
    .then((dayWeather) => {
        if (!dayWeather) {
            console.log("Weather data unavailable");
        };
        console.log(dayWeather);
        return dayWeather;
    })
    .catch((error) => { console.error(error) })

parseWeekWeather("Kuala Lumpur")
    .then((weekWeather) => {
        if (!weekWeather) {
            console.log("Weather data unavailable");
        };
        console.log(weekWeather);
        return weekWeather;
    })
    .catch((error) => { console.error(error) })