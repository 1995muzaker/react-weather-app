import React from "react";
import { CurrentWeatherDiv, LocationHeader } from "../styles/CurrentWeather";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <CurrentWeatherDiv>
      <LocationHeader>
        <div>
          <h2>
            {currentWeather.temperature}
            <sup>o</sup>C
          </h2>
          <p>{currentWeather.description}</p>
          <h4>
            {currentWeather.location}, {currentWeather.region}
          </h4>
        </div>
        <img
          className="mainImg"
          src={`http://openweathermap.org/img/w/${currentWeather.img}.png`}
          alt="weather-img"
        />
      </LocationHeader>

      {/* <div>
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
      </div> */}
    </CurrentWeatherDiv>
  );
};

export default CurrentWeather;
