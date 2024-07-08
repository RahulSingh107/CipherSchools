import { convertToFahrenheit, getWeatherTypeFromCode } from "../WeatherUtil";
const WeatherSummary = ({
  currentWeather: { temperature, weatherCode },
  isCelsius,
}) => {
  return (
    <div>
      <h1>
        {isCelsius
          ? `${temperature} °C `
          : `${convertToFahrenheit(temperature)} °F`}{" "}
        | {getWeatherTypeFromCode(weatherCode)}{" "}
      </h1>
    </div>
  );
};
export default WeatherSummary;
