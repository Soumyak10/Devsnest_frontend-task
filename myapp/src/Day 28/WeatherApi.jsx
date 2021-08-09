import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const WeatherApi = () => {
  const [place, setPlace] = useState();
  const [PlaceData, setPlaceData] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=2a05443c22e34fd4a4d141953210808&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaceData(data);
      });
  };
  useEffect(() => {}, []);

  return (
    <div class="container-28">
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container-mode">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>
        <div class="row">
          <div class="col-12 form">
            <input
              type="text"
              placeholder="Type city name"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <button class="btn btn-primary" onClick={updatePlaceData}>
              Submit
            </button>
          </div>
          <div className=" offset-md-4 col-12 col-md-4">
            <div
              className={`card ${
                darkMode ? "cardStyle-dark" : "cardStyle-light"
              }`}
            >
              {PlaceData.location ? (
                <>
                  <img src={PlaceData.current.condition.icon}></img>
                  <div className="temp">{PlaceData.current.temp_c}°c</div>
                  <div className="desc">{PlaceData.current.condition.text}</div>
                  <div className="place">{PlaceData.location.region}</div>
                  <div className="container">
                    <div className="row whp">
                      <div className="col">
                        <div className="title">
                          Wind now
                          <div className="data">
                            {PlaceData.current.wind_kph}
                            <span className="unit">KM</span>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">
                          Humidity
                          <div className="data">
                            {PlaceData.current.humidity}
                            <span className="unit">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">
                          Precipitation
                          <div className="data">
                            {PlaceData.current.precip_in}
                            <span className="unit">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <h3>Place not found</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApi;
