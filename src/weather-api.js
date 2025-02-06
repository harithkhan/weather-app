const apiKey = "9WH2H46W682MUWVFB39Q5JZN5";

function getApiUrl(location) {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
}

export async function getWeatherData(location) {
    const response = await fetch(getApiUrl(location));
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const weatherData = await response.json();
    return weatherData;
}
