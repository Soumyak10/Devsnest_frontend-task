import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, toggleToDo } from "../actions/index";
import { FaTrash, FaCheck } from "react-icons/fa";

const ListTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <div
            style={{ display: "inline-block" }}
            className={`todo-list ${todo.done ? "done" : ""}`}
          >
            {todo.title}
            <FaTrash
              style={{
                fontSize: " 36px",
                float: "right",
                background: "red",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(deleteToDo(index));
              }}
            />
            <FaCheck
              style={{
                fontSize: " 36px",
                marginRight: "10px",
                float: "right",
                background: "green",
                cursor: "pointer",
              }}
              onClick={() => dispatch(toggleToDo(index))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
