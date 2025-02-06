import "./style.css";
import { getWeatherData } from "./weather-api";

getWeatherData("London")
    .then((weatherData) => {
        console.log(weatherData)
    })

getWeatherData("Mom's House")
    .then((weatherData) => {
        console.log(weatherData);
    })
    .catch((error) => console.error(error))