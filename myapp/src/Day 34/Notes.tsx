import { useDispatch, useSelector } from "react-redux";
import { IncCounter, DecCounter } from "./actions/indexTs";
import { reducerType } from "./reducers/indexTs";
import "./style.css";

const Notes = () => {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text " />
      <button>Add</button>
    </div>
  );
};

export default Notes;
