import { getRawWeatherData } from "./weather-api";
import { getTempFormat } from "./temp-format";
import { formatTime } from "./format-time";

export async function getCurrentWeather(location) {
    try {
        const rawWeatherData = await getRawWeatherData(location);
        if (!rawWeatherData) {
            throw new Error(`Could not obtain current weather for ${location}`);
        }
        const currentWeather =
            getTempFormat() === "fahrenheit"
                ? {
                      dateTime: rawWeatherData.currentConditions.datetime,
                      searched: rawWeatherData.address,
                      resolvedAddress: rawWeatherData.resolvedAddress,
                      description: rawWeatherData.description,
                      conditions: rawWeatherData.currentConditions.conditions,
                      temp: `${rawWeatherData.currentConditions.temp}°F`,
                      feelsLike: `${rawWeatherData.currentConditions.feelslike}°F`,
                      humidity: rawWeatherData.currentConditions.humidity,
                      uvIndex: rawWeatherData.currentConditions.uvindex,
                      icon: rawWeatherData.currentConditions.icon,
                      precipProb: rawWeatherData.currentConditions.precipprob,
                      sunrise: formatTime(
                          rawWeatherData.currentConditions.sunrise
                      ),
                      sunset: formatTime(
                          rawWeatherData.currentConditions.sunset
                      ),
                  }
                : {
                      dateTime: rawWeatherData.currentConditions.datetime,
                      searched: rawWeatherData.address,
                      resolvedAddress: rawWeatherData.resolvedAddress,
                      description: rawWeatherData.description,
                      conditions: rawWeatherData.currentConditions.conditions,
                      temp: `${(((rawWeatherData.currentConditions.temp - 32) * 5) / 9).toFixed(2)}°C`,
                      feelsLike: `${(((rawWeatherData.currentConditions.feelslike - 32) * 5) / 9).toFixed(2)}°C`,
                      humidity: rawWeatherData.currentConditions.humidity,
                      uvIndex: rawWeatherData.currentConditions.uvindex,
                      icon: rawWeatherData.currentConditions.icon,
                      precipProb: rawWeatherData.currentConditions.precipprob,
                      sunrise: formatTime(
                          rawWeatherData.currentConditions.sunrise
                      ),
                      sunset: formatTime(
                          rawWeatherData.currentConditions.sunset
                      ),
                  };
        return currentWeather;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getHourlyWeather(location) {
    try {
        const rawWeatherData = await getRawWeatherData(location);
        if (!rawWeatherData) {
            throw new Error(`Could not obtain hourly weather for ${location}`);
        }
        const rawHourlyWeatherData = rawWeatherData.days[0].hours;
        const hourlyWeather = rawHourlyWeatherData.map((hourData) => ({
            datetime: formatTime(hourData.datetime),
            conditions: hourData.conditions,
            temp:
                getTempFormat() === "fahrenheit"
                    ? `${hourData.temp}°F`
                    : `${(((hourData.temp - 32) * 5) / 9).toFixed(2)}°C`,
            feelsLike:
                getTempFormat() === "fahrenheit"
                    ? `${hourData.feelslike}°F`
                    : `${(((hourData.feelslike - 32) * 5) / 9).toFixed(2)}°C`,
            icon: hourData.icon,
            precipProb: hourData.precipprob,
        }));
        return hourlyWeather;
    } catch (error) {
        console.error(error);
        return null;
    }
}
