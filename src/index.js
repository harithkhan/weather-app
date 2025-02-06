import "./style.css";
import { getWeatherData } from "./weather-api";

getWeatherData("Kuala Lumpur")
    .then((weatherData) => {
        console.log(weatherData)
    })
    .catch((error) => console.error(error))

getWeatherData("London")
    .then((weatherData) => {
        console.log(weatherData);
    })
    .catch((error) => console.error(error))