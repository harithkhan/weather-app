import { getWeatherData } from "./weather-api";

export async function parseCurrentWeather(location) {
    const weatherData = await getWeatherData(location);
    const currentWeather = {
        location: weatherData.resolvedAddress,
        datetime: weatherData.currentConditions.datetime,
        description: weatherData.description,
        conditions: weatherData.currentConditions.conditions,
        temp: weatherData.currentConditions.temp,
        feelslike: weatherData.currentConditions.feelslike,
        humidity: weatherData.currentConditions.humidity,
        uvindex: weatherData.currentConditions.uvindex,
        precipprob: weatherData.currentConditions.precipprob,
        sunrise: weatherData.currentConditions.sunrise,
        sunset: weatherData.currentConditions.sunset
    }
    return currentWeather;
}

// export function parseDayWeather(weatherData) {
//     let todayWeatherData = weatherData.days[0].hours;
//     return todayWeatherData;
// }

// export function parseWeekWeather() {

// }