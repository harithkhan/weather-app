import { getRawWeatherData } from "./weather-api";

export async function getCurrentWeather(location) {
    try {
        const rawWeatherData = await getRawWeatherData(location);
        if (!rawWeatherData) {
            throw new Error(`Could not obtain current weather for ${location}`);
        };
        const currentWeather = {
            address: rawWeatherData.address,
            description: rawWeatherData.description,
            conditions: rawWeatherData.currentConditions.conditions,
            temp: rawWeatherData.currentConditions.temp,
            feelsLike: rawWeatherData.currentConditions.feelslike,
            humidity: rawWeatherData.currentConditions.humidity,
            uvIndex: rawWeatherData.currentConditions.uvindex,
            icon: rawWeatherData.currentConditions.icon,
            precipProb: rawWeatherData.currentConditions.precipprob,
            sunrise: rawWeatherData.currentConditions.sunrise,
            sunset: rawWeatherData.currentConditions.sunset
        };
        console.log(rawWeatherData);
        console.log(currentWeather);
        return(currentWeather);
    }
    catch (error){
        console.error(error);
        return null;
    }
}

export async function getHourlyWeather(location) {
    try {
        const rawWeatherData = await getRawWeatherData(location);
        if (!rawWeatherData) {
            throw new Error(`Could not obtain hourly weather for ${location}`);
        };
        const rawHourlyWeatherData = rawWeatherData.days[0].hours;
        const hourlyWeather = rawHourlyWeatherData.map((hourData) => ({
                datetime: hourData.datetime,
                conditions: hourData.conditions,
                temp: hourData.temp,
                feelsLike: hourData.feelslike,
                icon: hourData.icon,
                precipProb: hourData.precipprob
        }));
        console.log(hourlyWeather);
        return hourlyWeather;
    } catch (error) {
        console.error(error);
        return null
    }
}