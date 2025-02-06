const apiKey = "9WH2H46W682MUWVFB39Q5JZN5";

function getApiUrl(location) {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
}

export async function getWeatherData(location) {
    const response = await fetch(getApiUrl(location));
    const weatherData = await response.json();
    return weatherData;
}

// getWeatherData("London")
//     .then((resolve) => {
//         console.log(resolve)
//     })