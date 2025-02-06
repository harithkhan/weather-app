import "./style.css";
import { parseCurrentWeather, parseDayWeather } from "./parse-weather-data";

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