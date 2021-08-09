import WeatherCard from "./WeatherCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { updatePlace, updatePlaceData } from "../actions";

const WeatherForm = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  return (
    <div className="container-29">
      <div class="row">
        <div class="col-12 form">
          <input
            type="text"
            placeholder="Type city name"
            value={place}
            onChange={(e) => dispatch(updatePlace(e.target.value))}
          />
          <button
            class="btn btn-primary"
            onClick={(e) => dispatch(updatePlaceData(place))}
          >
            Submit
          </button>
        </div>
        <WeatherCard />
      </div>
    </div>
  );
};

export default WeatherForm;
