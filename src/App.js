import React from "react";
import "./App.css";
import WeatherApp from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <WeatherApp />
        </div>
      </div>
    );
  }
}

export default App;
