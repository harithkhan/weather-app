import { getRawWeatherData } from "./weather-api";

export async function getCurrentWeather(location) {
    try {
        const rawWeatherData = await getRawWeatherData(location);
        if (!rawWeatherData) {
            throw new Error(`Could not obtain current weather for ${location}`);
        }
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
        }
        console.log(currentWeather);
        return(currentWeather);
    }
    catch (error){
        console.error(error);
        return null;
    }
}