import "./style.css";
import { getWeatherData } from "./weather-api";

getWeatherData("London")
    .then((resolve) => {
        console.log(resolve)
    })

getWeatherData("Kuala Lumpur")
    .then((resolve) => {
        console.log(resolve)
    })