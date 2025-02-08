export function displayCurrentWeatherError(error) {
    const currentWeatherError = document.createElement("span");
    currentWeatherError.className = "current-weather-error";
    currentWeatherError.textContent = error;

    const currentWeatherContainer = document.querySelector(".current-weather");
    currentWeatherContainer.appendChild(currentWeatherError);
}

export function displayHourlyWeatherError(error) {
    const hourlyWeatherError = document.createElement("span");
    hourlyWeatherError.className = "hourly-weather-error";
    hourlyWeatherError.textContent = error;

    const hourlyWeatherContainer = document.querySelector(".hourly-weather");
    hourlyWeatherContainer.appendChild(hourlyWeatherError);
}