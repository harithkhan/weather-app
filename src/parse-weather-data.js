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

export async function parseDayWeather(location) {
    const weatherData = await getWeatherData(location);
    const dayWeatherData = weatherData.days[0].hours;
    const parsedDayWeather = dayWeatherData.reduce((acc, hourData, index) => {
        acc[index] = {
            datetime: hourData.datetime,
            temp: hourData.temp,
            conditions: hourData.conditions,
            precipprob: hourData.precipprob
        };
        return acc;
    }, {});

    // let parsedDayWeather = {};

    // for (let i in dayWeatherData) {
    //     parsedDayWeather[i] = {
    //         datetime: dayWeatherData[i].datetime,
    //         temp: dayWeatherData[i].temp,
    //         conditions: dayWeatherData[i].conditions,
    //         precipprob: dayWeatherData[i].precipprob
    //     }
    // }
    return parsedDayWeather;
}

// export function parseWeekWeather() {

// }