import React from "react";
import CurrentWeather from "./CurrentWeather";
import { WeatherList } from "../styles/Weather";

const WeatherForecast = ({ weather, currentWeather }) => {
  return (
    <div>
      <WeatherList>
        {weather.map((weatherData) => {
          return (
            <div key={weatherData.dt_txt}>
              <p>{weatherData.description}</p>
              <p>{weatherData.dt_txt}</p>
              <p>{weatherData.temp}</p>
              <img
                className="mainImg"
                src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
                alt="weather-img"
              />
            </div>
          );
        })}
      </WeatherList>
      <CurrentWeather currentWeather={currentWeather} />
    </div>
  );
};

export default WeatherForecast;
