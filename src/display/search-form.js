import {
    getCurrentWeather,
    getHourlyWeather,
} from "../logic/parse-weather-data";
import { buildCurrentWeatherDisplay, clearCurrentWeatherDisplay } from "./build-current-weather-display";
import { buildHourlyWeatherDisplay, clearHourlyWeatherDisplay } from "./build-hourly-weather-display";
import { displayCurrentWeather } from "./display-current-weather";
import { displayCurrentWeatherError, displayHourlyWeatherError } from "./display-error";
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
        if (!currentWeather || !hourlyWeather) {
            throw new Error(`Cound not obtain weather data for "${searchLocation}"`);
        }
        clearCurrentWeatherDisplay();
        buildCurrentWeatherDisplay();
        clearHourlyWeatherDisplay();
        buildHourlyWeatherDisplay();
        displayCurrentWeather(currentWeather);
        displayHourlyWeather(hourlyWeather);
        console.log(currentWeather);
        console.log(hourlyWeather);
        // Clear search input after search
        const searchInput = document.getElementById("search");
        searchInput.value = "";
        searchInput.dataset.searched = "true";  
    } catch (error) {
        console.error(error);
        clearCurrentWeatherDisplay();
        displayCurrentWeatherError(error);
        clearHourlyWeatherDisplay();
        displayHourlyWeatherError("Could not obtain hourly weather");
    }
}

export function attachFormSubmitEventListener() {
    searchForm.addEventListener("submit", handleSearchSubmit);
}
