import {
    parseCurrentWeather,
    parseDayWeather,
    parseWeekWeather,
} from "./parse-weather-data";

export async function handleSearch(location) {
    try {
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
