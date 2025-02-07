export function displayCurrentWeather(currentWeather) {
    const currentIconContainer = document.querySelector(
        ".current-icon-container"
    );
    const locationContainer = document.querySelector(".location-container");
    const tempContainer = document.querySelector(".temp-container");
    const feelsLikeContainer = document.querySelector(".feels-like-container");
    const humidityContainer = document.querySelector(".humidity-container");
    const precipContainer = document.querySelector(".precip-container");
    const uvIndexContainer = document.querySelector(".uvindex-container");
    const conditionsContainer = document.querySelector(".conditions-container");
    const descriptionContainer = document.querySelector(
        ".description-container"
    );
    const sunriseContainer = document.querySelector(".sunrise-container");
    const sunsetContainer = document.querySelector(".sunset-container");

    const currentIconText = currentWeather.icon;
    const currentIcon = document.createElement("img");
    const images = require.context(
        "../img/dynamic-icons",
        false,
        /\.(png|jpe?g|svg)$/
    );
    function getWeatherIcon(iconName) {
        return images(`./${iconName}.png`);
    }
    currentIcon.src = getWeatherIcon(currentIconText);
    currentIcon.className = "current-icon";
    currentIcon.alt = "Icon of current weather";

    const {
        resolvedAddress: location,
        temp,
        feelsLike,
        humidity,
        precipProb: precip,
        uvIndex,
        conditions,
        description,
        sunrise,
        sunset,
    } = currentWeather;

    currentIconContainer.innerHTML = ""; // Clear previous icon, if any
    currentIconContainer.appendChild(currentIcon);
    locationContainer.textContent = location;
    tempContainer.textContent = temp;
    feelsLikeContainer.textContent = `Feels Like: ${feelsLike}`;
    humidityContainer.textContent = `Humidity: ${humidity}`;
    precipContainer.textContent = `Rain: ${precip}%`;
    uvIndexContainer.textContent = `UV Index: ${uvIndex}`;
    conditionsContainer.textContent = conditions;
    descriptionContainer.textContent = description;
    sunriseContainer.textContent = `Sunrise: ${sunrise}`;
    sunsetContainer.textContent = `Sunset: ${sunset}`;
}
