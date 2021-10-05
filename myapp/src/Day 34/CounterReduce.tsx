import { useDispatch, useSelector } from "react-redux";
import { IncCounter, DecCounter } from "./actions/indexTs";
import { reducerType } from "./reducers/indexTs";
import "./style.css";

const CounterReduce = () => {
  const counter = useSelector((state: reducerType) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="container_34">
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          dispatch(IncCounter(1));
        }}
      >
        +
      </button>
      <div style={{ margin: "40px" }}>{counter}</div>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          dispatch(DecCounter(1));
        }}
      >
        -
      </button>
    </div>
  );
};

export default CounterReduce;
