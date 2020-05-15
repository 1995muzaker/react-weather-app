import React from "react";
// import UserLocation from './components/UserLocation.js';
// import Navbar from './components/Navbar.js'
import "./App.css";
import Axios from "axios";

const Navbar = (props) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h1 className="title">Weather App</h1>
      </div>

      <div className="col-md-6">
        <form
          className="region"
          onSubmit={(e) => {
            props.changeLocation(e);
          }}
        >
          <input
            type="text"
            className="regioninput"
            placeholder="Select your region"
            onChange={(e) => {
              props.changeRegion(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

function UserLocation(props) {
  const {
    temperature,
    description,
    location,
    region,
    // country,
    wind_speed,
    pressure,
    // precip,
    humidity,
    img,
  } = props.weather;

  return (
    <div className="user-weather">
      <div className="row">
        <div className="col-md-3 weather-temp">
          <h1>
            {temperature}
            <sup>o</sup>C , {description}
          </h1>
          <h4>{location}</h4>
          <p>
            {region} ,{/* {country} */}
          </p>
        </div>

        <div className="col-md-9">
          <img
            className="mainImg"
            src={`http://openweathermap.org/img/w/${img}.png`}
            alt="weather-img"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 weather-info">
          <p>
            <b>Wind Speed</b>(km/hr)
          </p>
          <h2>{wind_speed}</h2>
        </div>

        <div className="col-md-3 weather-info">
          <p>
            <b>Preassure</b>(millibar)
          </p>
          <h2>{pressure}</h2>
        </div>

        <div className="col-md-3 weather-info">
          <p>
            <b>Precipitation</b>(mm)
          </p>
          {/* <h2>{precip}</h2> */}
        </div>

        <div className="col-md-3 weather-info">
          <p>
            <b>Humidity</b>(%)
          </p>
          <h2>{humidity}</h2>
        </div>
      </div>
    </div>
  );
}

class App extends React.Component {
  //state
  state = {
    userPosition: {
      latitude: 35,
      longitude: 139,
    },
    weather: {},
    regionInput: "",
  };

  componentDidMount() {
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
          `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.userPosition.latitude}&lon=${this.state.userPosition.longitude}&appid=2d9ba549eb64e4464aa65bc0b4f1258e
          `
        ).then((res) => {
          console.log(res);
          let userWeather = {
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

          this.setState({ weather: userWeather });
        });
      });
    }
  }

  //update the value of the the input field with state
  changeRegion = (value) => {
    this.setState({ regionInput: value });
  };

  //update the weather depending upon the value user entered
  changeLocation = (e) => {
    e.preventDefault();

    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.regionInput}&units=metric&APPID=2d9ba549eb64e4464aa65bc0b4f1258e`
    ).then((res) => {
      let userWeather = {
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

      this.setState({ weather: userWeather });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar
            changeRegion={this.changeRegion}
            changeLocation={this.changeLocation}
          />
          <UserLocation weather={this.state.weather} />
        </div>
      </div>
    );
  }
}

export default App;
