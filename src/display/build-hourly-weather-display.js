import leftIconPath from "../img/left.png";
import rightIconPath from "../img/right.png";
import { attachArrowButtonEventListeners } from "./display-hourly-weather";

export function buildHourlyWeatherDisplay() {
    const hourlyWeatherDisplay = document.querySelector(".hourly-weather");
    hourlyWeatherDisplay.className = "hourly-weather"; // Remove hidden class

    const leftButton = document.createElement("button");
    leftButton.type = "button";
    leftButton.className = "carousel-button";
    leftButton.id = "left-button";
    hourlyWeatherDisplay.appendChild(leftButton);

    const leftIcon = document.createElement("img");
    leftIcon.class = "arrow-icon";
    leftIcon.src = leftIconPath;
    leftButton.appendChild(leftIcon);

    const carouselFrame = document.createElement("div");
    carouselFrame.className = "carousel-frame";
    hourlyWeatherDisplay.appendChild(carouselFrame);

    const carousel = document.createElement("div");
    carousel.className = "carousel";
    carouselFrame.appendChild(carousel);

    const rightButton = document.createElement("button");
    rightButton.type = "button";
    rightButton.className = "carousel-button";
    rightButton.id = "right-button";
    hourlyWeatherDisplay.appendChild(rightButton);

    const rightIcon = document.createElement("img");
    rightIcon.class = "arrow-icon";
    rightIcon.src = rightIconPath;
    rightButton.appendChild(rightIcon);

    attachArrowButtonEventListeners();
}

export function clearHourlyWeatherDisplay() {
    const hourlyWeatherDisplay = document.querySelector(".hourly-weather");
    hourlyWeatherDisplay.innerHTML = "";
    hourlyWeatherDisplay.className = "hourly-weather"; // Remove hidden class
}
