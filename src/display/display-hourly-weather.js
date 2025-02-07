export function displayHourlyWeather(hourlyWeather) {
    const carousel = document.querySelector(".carousel");
    carousel.innerHTML = "";
    hourlyWeather.forEach((hour) => {
        const {
            datettime,
            temp,
            icon: iconText
        } = hour;
        const hourContainer = document.createElement("div");
        hourContainer.className = "hour-container"
        carousel.appendChild(hourContainer);

        const hourIcon = document.createElement("img");
        const images = require.context(
            "../img/dynamic-icons",
            false,
            /\.(png|jpe?g|svg)$/
        );
        function getWeatherIcon(iconName) {
            return images(`./${iconName}.png`);
        }
        hourIcon.src = getWeatherIcon(iconText);
        hourIcon.className = "hour-icon";
        hourIcon.alt = "Icon of the weather of this hour";
        hourContainer.appendChild(hourIcon);
    })
}