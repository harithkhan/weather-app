// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from "date-fns";
import { getWeatherData } from "./weather-api";

export async function parseCurrentWeather(location) {
    const weatherData = await getWeatherData(location);
    if (!weatherData) {
        return console.error(`Failed to retrieve weather data for ${location}`);
    }
    const currentTime = new Date();
    const formattedCurrentTime = format(currentTime, "h:mm a");   
    
    const currentWeather = {
        currenttime: formattedCurrentTime,
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
    if (!weatherData || !weatherData.days || !weatherData.days[0] || !weatherData.days[0].hours) {
        return console.error(`Failed to retrieve weather data for ${location}`);
    }
    const dayWeatherData = weatherData.days[0].hours; // Returns an array of 24 hours of weather data
    const parsedDayWeather = dayWeatherData.map((hourData) => ({
        datetime: hourData.datetime,
        temp: hourData.temp,
        conditions: hourData.conditions,
        precipprob: hourData.precipprob
     
    }));
    return parsedDayWeather;
}

export async function parseWeekWeather(location) {
    const weatherData = await getWeatherData(location);
    if (!weatherData || !weatherData.days) {
        return console.error(`Failed to retrieve weather data for ${location}`);
    }
    const weekWeatherData = weatherData.days // Returns an array of 14 days of weather data
    const parsedWeekWeather = weekWeatherData.slice(0, 7).map((dayData) => ({
        datetime: dayData.datetime,
        temp: dayData.temp,
        conditions: dayData.conditions,
        precipprob: dayData.precipprob
    }));
    return parsedWeekWeather;
}