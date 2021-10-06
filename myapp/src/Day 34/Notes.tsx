import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { reducerType } from "./reducers/indexTs";
import { addNote, deleteNote } from "./actions/indexTs";
import "./style.css";

const Notes = () => {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  return (
    <div className="container_34">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          style={{ margin: "10px" }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(addNote(input));
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        {notes.length === 0 ? (
          <h2>Click on add to add notes</h2>
        ) : (
          <ul>
            {notes.map((note: string, index: number) => (
              <li key={index}>
                <h3>{note}</h3>
                <button
                  onClick={() => dispatch(deleteNote(index))}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notes;
