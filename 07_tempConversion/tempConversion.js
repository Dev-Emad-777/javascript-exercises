// const { round } = require("prelude-ls");

const convertToCelsius = function (fahrenheit) {
  // fahrenheit to celsius formula
  // ? °C = (°F - 32) × 5/9
  let celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function (celsius) {
  // celsius degree to fahrenheit formula
  // ? °F = °C × (9/5) + 32
  let fahrenheit = celsius * (9 / 5) + 32;
  return Math.round(fahrenheit *10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
