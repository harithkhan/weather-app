import "./style.css";
import {
    getCurrentWeather,
    getHourlyWeather,
} from "./logic/parse-weather-data";

getCurrentWeather("Kuala Lumpur");
getHourlyWeather("Kuala Lumpur");
getHourlyWeather("Mars");
