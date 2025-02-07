const apiKey = "9WH2H46W682MUWVFB39Q5JZN5";

function getApiUrl(location) {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
}

export async function getRawWeatherData(location) {
    try {
        const apiUrl = getApiUrl(location);
        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) {
            throw new Error("Bad Request");
        }
        const rawWeatherData = await apiResponse.json();
        console.log(rawWeatherData)
        return rawWeatherData
    } catch (error) {
        console.error(`Could not obtain weather data for ${location},`, error);
        return null;
    }
}