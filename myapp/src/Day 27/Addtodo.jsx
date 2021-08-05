import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions/index";
import Listtodo from "./Listtodo";
import { FaPlus } from "react-icons/fa";
import "./style.css";

const Addtodo = () => {
  const [item, setitem] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container-27">
      <h2>Todo-List</h2>
      <div>
        <input
          type="text"
          placeholder="Add your todo"
          value={item}
          onChange={(e) => {
            setitem(e.target.value);
          }}
        />
        <FaPlus
          style={{
            fontSize: " 35px",
            border: "1px solid black",
            background: "#b1cbbb",
            height: "35px",
            width: "69px",
            margin: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch(addToDo({ title: item, done: false }));
            setitem("");
          }}
        />
      </div>
      <Listtodo />
    </div>
  );
};

export default Addtodo;
