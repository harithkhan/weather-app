import {
    getCurrentWeather,
    getHourlyWeather,
} from "../logic/parse-weather-data";
import {
    buildCurrentWeatherDisplay,
    clearCurrentWeatherDisplay,
} from "./build-current-weather-display";
import {
    buildHourlyWeatherDisplay,
    clearHourlyWeatherDisplay,
} from "./build-hourly-weather-display";
import { displayCurrentWeather } from "./display-current-weather";
import {
    displayCurrentWeatherError,
    displayHourlyWeatherError,
} from "./display-error";
import { displayHourlyWeather } from "./display-hourly-weather";
import { displayLoadingGif, hideLoadingGif } from "./loading-gif";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search");

export async function handleSearchSubmit(event = null) {
    if (event != null) {
        event.preventDefault();
    }
    const formData = new FormData(searchForm);
    const searchLocation = formData.get("search");
    if (!searchLocation.trim()) {
        searchInput.setCustomValidity("Please enter a location.");
        searchInput.reportValidity();
        return; 
    } 
    try {
        displayLoadingGif();
        const currentWeather = await getCurrentWeather(searchLocation);
        const hourlyWeather = await getHourlyWeather(searchLocation);
        hideLoadingGif();
        if (!currentWeather || !hourlyWeather) {
            throw new Error(
                `Cound not obtain weather data for "${searchLocation}"`
            );
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
        searchInput.value = "";
        searchInput.dataset.searched = "true";
    } catch (error) {
        console.error(error);
        searchInput.value = "";
        searchInput.dataset.searched = "false";
        clearCurrentWeatherDisplay();
        displayCurrentWeatherError(error);
        clearHourlyWeatherDisplay();
        displayHourlyWeatherError("Could not obtain hourly weather data");
    }
}

function handleSearchInput() {
    if (searchInput) { searchInput.setCustomValidity(""); }
}

export function attachFormSubmitEventListener() {
    if (!searchForm || !searchInput) return;
    searchForm.addEventListener("submit", handleSearchSubmit);
    searchInput.addEventListener("input", handleSearchInput);
}
