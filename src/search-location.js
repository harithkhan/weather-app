import {
    parseCurrentWeather,
    parseDayWeather,
    parseWeekWeather,
} from "./parse-weather-data";

export async function handleSearch(location) {
    const currentWeather = await parseCurrentWeather(location)
        .then((currentWeatherData) => {
            if (!currentWeatherData) {
                console.error(`Weather data unavailable for ${location}`);
            }
            return currentWeatherData;
        })
        .catch((error) => {
            console.error(error);
        });

    const dayWeather = await parseDayWeather(location)
        .then((dayWeatherData) => {
            if (!dayWeatherData) {
                console.error(`Weather data unavailable for ${location}`);
            }
            return dayWeatherData;
        })
        .catch((error) => {
            console.error(error);
        });

    const weekWeather = await parseWeekWeather(location)
        .then((weekWeatherData) => {
            if (!weekWeatherData) {
                console.error(`Weather data unavailable for ${location}`);
            }
            return weekWeatherData;
        })
        .catch((error) => {
            console.error(error);
        });

    console.log(currentWeather, dayWeather, weekWeather);
    return {
        currentWeather,
        dayWeather,
        weekWeather,
    };
}
