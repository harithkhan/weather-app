import {
    getCurrentWeather,
    getHourlyWeather,
} from "../logic/parse-weather-data";
import { displayCurrentWeather } from "./display-current-weather";
import { displayHourlyWeather } from "./display-hourly-weather";

const searchForm = document.getElementById("search-form");

export async function handleSearchSubmit(event = null) {
    if (event != null) {
        event.preventDefault();
    }
    try {
        const formData = new FormData(searchForm);
        const searchLocation = formData.get("search");
        const currentWeather = await getCurrentWeather(searchLocation);
        const hourlyWeather = await getHourlyWeather(searchLocation);
        displayCurrentWeather(currentWeather);
        displayHourlyWeather(hourlyWeather);
        console.log(currentWeather);
        console.log(hourlyWeather);
        // Clear search input after search
        const searchInput = document.getElementById("search");
        searchInput.value = "";
        searchInput.dataset.searched = "true";

        if (!currentWeather || !hourlyWeather) {
            throw new Error(`Cound not search for null location`);
        }
    } catch (error) {
        console.error(error);
    }
}

export function attachFormSubmitEventListener() {
    searchForm.addEventListener("submit", handleSearchSubmit);
}
