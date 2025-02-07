export function displayHourlyWeather(hourlyWeather) {
    const carousel = document.querySelector(".carousel");
    carousel.innerHTML = "";
    hourlyWeather.forEach((hour) => {
        const {
            datetime,
            temp,
            icon: iconText
        } = hour;
        const hourContainer = document.createElement("div");
        hourContainer.className = "hour-container"
        carousel.appendChild(hourContainer);

        const datetimeDisplay = document.createElement("div");
        datetimeDisplay.className = "hour-datetime-display";
        datetimeDisplay.textContent = datetime;
        hourContainer.appendChild(datetimeDisplay);

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

        const tempDisplay = document.createElement("div");
        tempDisplay.className = "hour-temp-display";
        tempDisplay.textContent = temp;
        hourContainer.appendChild(tempDisplay);
    })
}

function handleRightArrowClick() {
    const carousel = document.querySelector(".carousel");
    carousel.style.right = "20rem";
}

export function attachArrowButtonEventListeners() {
    const rightArrowButton = document.getElementById("right-button");
    rightArrowButton.addEventListener("click", handleRightArrowClick);
}