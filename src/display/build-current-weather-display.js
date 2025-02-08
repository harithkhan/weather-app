export function buildCurrentWeatherDisplay() {
    const currentWeatherContainer = document.querySelector(".current-weather");
    currentWeatherContainer.className = "current-weather grid-on";

    const currentIconContaier = document.createElement("div");
    currentIconContaier.className = "current-icon-container";
    currentWeatherContainer.appendChild(currentIconContaier);

    const locationContainer = document.createElement("div");
    locationContainer.className = "location-container";
    currentWeatherContainer.appendChild(locationContainer);

    const tempContainer = document.createElement("div");
    tempContainer.className = "temp-container";
    currentWeatherContainer.appendChild(tempContainer);

    const feelsLikeContainer = document.createElement("div");
    feelsLikeContainer.className = "feels-like-container";
    currentWeatherContainer.appendChild(feelsLikeContainer);

    const humidityContainer = document.createElement("div");
    humidityContainer.className = "humidity-container";
    currentWeatherContainer.appendChild(humidityContainer);

    const precipContainer = document.createElement("div");
    precipContainer.className = "precip-container";
    currentWeatherContainer.appendChild(precipContainer);

    const uvIndexContainer = document.createElement("div");
    uvIndexContainer.className = "uvindex-container";
    currentWeatherContainer.appendChild(uvIndexContainer);

    const conditionsContainer = document.createElement("div");
    conditionsContainer.className = "conditions-container";
    currentWeatherContainer.appendChild(conditionsContainer);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "description-container";
    currentWeatherContainer.appendChild(descriptionContainer);

    const sunriseContainer = document.createElement("div");
    sunriseContainer.className = "sunrise-container";
    currentWeatherContainer.appendChild(sunriseContainer);

    const sunsetContainer = document.createElement("div");
    sunsetContainer.className = "sunset-container";
    currentWeatherContainer.appendChild(sunsetContainer);
}

export function clearCurrentWeatherDisplay() {
    const currentWeatherContainer = document.querySelector(".current-weather");
    currentWeatherContainer.innerHTML = "";
    currentWeatherContainer.className = "current-weather"; // Removes grid-on class
}
