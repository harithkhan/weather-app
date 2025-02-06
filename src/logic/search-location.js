import {
    parseCurrentWeather,
    parseDayWeather,
    parseWeekWeather,
} from "./parse-weather-data";
import { getWeatherData } from "./weather-api";

export async function handleSearch(location) {
    try {
        const weatherData = await getWeatherData(location);
        if (!weatherData) {
            console.error(`Weather data not available for ${location}`);
            return null;
        }

        const [currentWeather, dayWeather, weekWeather] = await Promise.all([
            parseCurrentWeather(location),
            parseDayWeather(location),
            parseWeekWeather(location),
        ]);
        return {
            currentWeather,
            dayWeather,
            weekWeather,
        };
    } catch (error) {
        console.error(error);
        throw error;
    }  
}
