import { handleSearch } from "../logic/search-location";

const searchForm = document.getElementById("weather-form");

async function handleSearchSubmit(event) {
    event.preventDefault();
    const formData = new FormData(searchForm);
    const location = formData.get("search");
        if (!location) {
        console.error("No location entered.");
        return;
    }
    try {
        const compiledWeatherData = await handleSearch(location);
        const searchInput = document.getElementById("search");
        searchInput.value = "";
        if (compiledWeatherData !== null) {
            console.log(compiledWeatherData);
        }
        if (compiledWeatherData === null) {
            console.log(`Could not find weather data for ${location}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export function attachFormEventListeners() {
    searchForm.addEventListener("submit", handleSearchSubmit);
}