const apiKey = "9WH2H46W682MUWVFB39Q5JZN5";

function getApiUrl(location) {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
}

export async function getWeatherData(location) {
    try {
        const response = await fetch(getApiUrl(location));
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const weatherData = await response.json();
        if (!weatherData || !weatherData.currentConditions) {
            throw new Error(`No valid weather data found for ${location}`);
        }
        return weatherData;
    } catch (error) {
        console.error(`Error fetching weather data for ${location}:`, error);
        return null;
    }
}
