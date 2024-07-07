const wmoWeatherCode = new Map();
wmoWeatherCode.set(0, "Clear sky");
wmoWeatherCode.set(1, "Mainly clear");
wmoWeatherCode.set(2, "Partly cloudy");
wmoWeatherCode.set(3, "Overcast");
wmoWeatherCode.set(45, "Fog");
wmoWeatherCode.set(48, "Depositing rime fog");
wmoWeatherCode.set(51, "Light drizzle");
wmoWeatherCode.set(53, "Moderate drizzle");
wmoWeatherCode.set(55, "Dense drizzle");
wmoWeatherCode.set(56, "Light freezing drizzle");
wmoWeatherCode.set(57, "Dense freezing drizzle");
wmoWeatherCode.set(61, "Slight rain");
wmoWeatherCode.set(63, "Moderate rain");
wmoWeatherCode.set(65, "Heavy rain");
wmoWeatherCode.set(66, "Light freezing rain");
wmoWeatherCode.set(67, "Heavy freezing rain");
wmoWeatherCode.set(71, "Slight snow fall");
wmoWeatherCode.set(73, "Moderate snow fall");
wmoWeatherCode.set(75, "Heavy snow fall");
wmoWeatherCode.set(77, "Snow grains");
wmoWeatherCode.set(80, "Slight rain showers");
wmoWeatherCode.set(81, "Moderate rain showers");
wmoWeatherCode.set(82, "Violent rain showers");
wmoWeatherCode.set(85, "Slight snow showers");
wmoWeatherCode.set(86, "Heavy snow showers");
wmoWeatherCode.set(95, "Thunderstorm");
wmoWeatherCode.set(96, "Thunderstorm with slight hail");
wmoWeatherCode.set(99, "Thunderstorm with heavy hail");

const convertToFahrenheit = (celsiusTemp) =>
  ((celsiusTemp * 9) / 5 + 32).toFixed(1);

const getWeatherTypeFromCode = (code) => wmoWeatherCode.get(code);
export { convertToFahrenheit, getWeatherTypeFromCode };
