"use strict";
const axios = require("axios");
const { BASE_WEATHER_URL, APP_ID } = require("./consts");

exports.getCurrentWeather = async function getCurrentWeather(state, city) {
    try {
        const response = await axios.get(
            `${BASE_WEATHER_URL}weather?q=${city},${state}&appid=${APP_ID}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

exports.formatDescription = function formatDescription(data) {
    const cloudDescription =
        data.weather[0].main.toLowerCase() === "clouds" ? "cloudy" : "clear";

    const cityName = data.name;
    const tempF = convertKelvinToFahrenheit(data.main.temp);
    const realFeelF = convertKelvinToFahrenheit(data.main.feels_like);
    const windSpeed = data.wind.speed;
    const gusts = data.wind.gust;

    return `
    Right now, it is ${cloudDescription} in ${cityName}. It is
    ${tempF}F, but it feels like ${realFeelF}F. 
    There is ${windSpeed} MPH wind, with gusts up to ${gusts} MPH.
    `;
};

function convertKelvinToFahrenheit(kelvin) {
    let fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    return fahrenheit;
}
