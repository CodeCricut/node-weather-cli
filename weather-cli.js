#!/usr/bin/env node
"use strict";
(async function() {
    const {
        getCurrentWeather,
        formatDescription
    } = require("./api-consumer.js");
    const { args } = require("./parse-args");

    const [city, state] = args.location;

    const data = await getCurrentWeather(state, city);
    const formattedDescription = formatDescription(data);
    console.log(formattedDescription);
})();
