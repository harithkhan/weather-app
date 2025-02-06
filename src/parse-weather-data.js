export function parseCurrentWeather(weatherData) {
    return {
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
        sunset: weatherData.currentConditions.sunset,
    }
}

export function parseDayWeather(weatherData) {
    let dayWeather = {};
    const hoursObj = weatherData.days[0].hours;
    for (let i in hoursObj) {
        dayWeather[i] = hoursObj[i]
    }
}

export function parseWeekWeather() {

}