import { getCurrentWeather } from "../logic/parse-weather-data";

export async function displayFromHour() {
    const locationContainer = document.querySelector(".location-container");
    const location = locationContainer.textContent;
    const currentWeather = await getCurrentWeather(location);
    const currentRawHour = currentWeather.dateTime;
    const match = currentRawHour.match(/^0?(\d{1,2})/);
    const currentHour = match[1];

    const carousel = document.querySelector(".carousel");
    if (currentHour >= 0 && currentHour < 3) {
        carousel.style.right = "0rem";
    }
    if (currentHour > 2 && currentHour < 6) {
        carousel.style.right = "20rem";
    }
    if (currentHour > 5 && currentHour < 9) {
        carousel.style.right = "40rem";
    }
    if (currentHour > 8 && currentHour < 12) {
        carousel.style.right = "60rem";
    }
    if (currentHour > 11 && currentHour < 15) {
        carousel.style.right = "80rem";
    }
    if (currentHour > 14 && currentHour < 18) {
        carousel.style.right = "100rem";
    }
    if (currentHour > 17 && currentHour < 21) {
        carousel.style.right = "120rem";
    }
    if (currentHour > 20 && currentHour <= 23) {
        carousel.style.right = "140rem";
    }
}
