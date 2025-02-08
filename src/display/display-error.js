export function displayCurrentWeatherError(error) {
    const currentWeatherError = document.createElement("span");
    currentWeatherError.className = "current-weather-error";
    currentWeatherError.textContent = error;

    const currentWeatherContainer = document.querySelector(".current-weather");
    currentWeatherContainer.appendChild(currentWeatherError);
}