import React from "react";

const WeatherForecast = ({ weather, currentWeather }) => {
  return (
    <div>
      <div>
        <p>
          {currentWeather.temperature}
          <sup>o</sup>C, {currentWeather.description}
        </p>
        <h4>{currentWeather.location}</h4>
        <p>{currentWeather.region}</p>
        <img
          className="mainImg"
          src={`http://openweathermap.org/img/w/${currentWeather.img}.png`}
          alt="weather-img"
        />
        <div>
          <p>
            <b>Wind Speed</b>(km/hr)
          </p>
          <h2>{currentWeather.wind_speed}</h2>
        </div>
        <div>
          <p>
            <b>Preassure</b>(millibar)
          </p>
          <h2>{currentWeather.pressure}</h2>
        </div>
        <div className="col-md-3 weather-info">
          <p>
            <b>Humidity</b>(%)
          </p>
          <h2>{currentWeather.humidity}</h2>
        </div>
      </div>
      {weather.map((weatherData) => {
        return (
          <div>
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
    </div>
  );
};

export default WeatherForecast;
