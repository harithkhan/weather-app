import "./style.css";
import {
    getCurrentWeather,
    getHourlyWeather,
} from "./logic/parse-weather-data";
import { toggleTempFormat } from "./logic/temp-format";

getCurrentWeather("Kuala Lumpur");
toggleTempFormat();
getCurrentWeather("Kuala Lumpur");
