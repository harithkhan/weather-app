import "./style.css";
import { parseCurrentWeather, parseDayWeather, parseWeekWeather } from "./parse-weather-data";
import { getWeatherData } from "./weather-api";

getWeatherData("Kuala Lumpur")
    .then((weatherData) => {
        console.log(weatherData);
    })
    .catch((error) => { console.error(error) });

parseCurrentWeather("Kuala Lumpur")
    .then((currentWeather) => {
        console.log(currentWeather);
        return currentWeather
    })
    .catch((error) => { console.error(error) })

parseDayWeather("Kuala Lumpur")
    .then((dayWeather) => {
        console.log(dayWeather);
        return dayWeather;
    })
    .catch((error) => { console.error(error) })

parseWeekWeather("Kuala Lumpur")
    .then((weekWeather) => {
        console.log(weekWeather);
        return weekWeather;
    })
    .catch((error) => { console.error(error) })