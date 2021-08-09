import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const PlaceData = useSelector((state) => state.placeData);
  return (
    <div className="container-29">
      <div className=" offset-md-4 col-12 col-md-4">
        <div className="card cardStyle-light">
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
  );
};

export default WeatherCard;
