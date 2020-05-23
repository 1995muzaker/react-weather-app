import React from "react";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import Axios from "axios";

class WeatherApp extends React.Component {
  state = {
    userPosition: {
      latitude: 35,
      longitude: 139,
    },
    weather: [],
    regionInput: "",
    currentWeather: [],
  };

  componentDidMount() {
    this.currentWeatherData();
    //check whether geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        //get the lat and long of your device
        let pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        this.setState({ userPosition: pos });

        //Weather Api call
        Axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${this.state.userPosition.latitude}&lon=${this.state.userPosition.longitude}&appid=2d9ba549eb64e4464aa65bc0b4f1258e`
        ).then((res) => {
          console.log(res);
          let userWeather = res.data.list.map((weatherData) => ({
            temp: weatherData.main.temp,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon,
            dt_txt: weatherData.dt_txt,
          }));
          // let currentUserWeather = {
          //   name: res.data.city.name,
          //   country: res.data.city.country,
          // };
          this.setState({
            weather: userWeather,
            // currentPlace: currentUserWeather,
          });
          console.log(this.state.weather);
          // this.setState({ weather: res.data.list });
        });
      });
    }
  }

  currentWeatherData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        //get the lat and long of your device
        let pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        this.setState({ userPosition: pos });

        //Weather Api call
        Axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.userPosition.latitude}&lon=${this.state.userPosition.longitude}&appid=2d9ba549eb64e4464aa65bc0b4f1258e`
        ).then((res) => {
          console.log(res);
          let currentUserWeather = {
            temperature: res.data.main.temp,
            description: res.data.weather[0].description,
            location: res.data.name,
            region: res.data.sys.country,
            // country: res.data.location.country,
            wind_speed: res.data.wind.speed,
            pressure: res.data.main.pressure,
            // precip: res.data.current.precip,
            humidity: res.data.main.humidity,
            img: res.data.weather[0].icon,
          };

          this.setState({ currentWeather: currentUserWeather });
          // this.setState({ weather: res.data.list });
        });
      });
    }
  };
  //update the value of the the input field with state
  changeRegion = (value) => {
    this.setState({ regionInput: value });
  };

  //update the weather depending upon the value user entered
  changeLocation = (e) => {
    e.preventDefault();

    Axios.get(
      // `https://api.openweathermap.org/data/2.5/weather?q=${this.state.regionInput}&units=metric&APPID=2d9ba549eb64e4464aa65bc0b4f1258e`
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.regionInput}&appid=2d9ba549eb64e4464aa65bc0b4f1258e`
    ).then((res) => {
      let userWeather = res.data.list.map((weatherData) => ({
        temp: weatherData.main.temp,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        dt_txt: weatherData.dt_txt,
      }));
      // let currentUserWeather = {
      //   name: res.data.city.name,
      //   country: res.data.city.country,
      // };
      this.setState({ weather: userWeather });
    });

    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.regionInput}&units=metric&APPID=2d9ba549eb64e4464aa65bc0b4f1258e`
    ).then((res) => {
      let currentUserWeather = {
        temperature: res.data.main.temp,
        description: res.data.weather[0].description,
        location: res.data.name,
        region: res.data.sys.country,
        // country: res.data.location.country,
        wind_speed: res.data.wind.speed,
        pressure: res.data.main.pressure,
        // precip: res.data.current.precip,
        humidity: res.data.main.humidity,
        img: res.data.weather[0].icon,
      };

      this.setState({ currentWeather: currentUserWeather });
    });
  };
  render() {
    return (
      <div>
        <Search
          changeRegion={this.changeRegion}
          changeLocation={this.changeLocation}
        />
        <WeatherForecast
          weather={this.state.weather}
          currentWeather={this.state.currentWeather}
        />
      </div>
    );
  }
}

export default WeatherApp;
