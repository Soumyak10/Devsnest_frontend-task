import { useContext, useState } from "react";
import { ThemeContextType } from "./ThemeContext";
import ThemeContext from "./ThemeContext";
import ListOfTodo from "./ListOfTodo";

interface TodosType {
  title: string;
  done: boolean;
  index: number;
}

const Todos = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [input, setInput] = useState<string>("");

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.index !== id);
    setTodos(newTodos);
  };

  return (
    <div className={theme ? "todos dark" : "todos light"}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        style={{ padding: "10px", margin: "20px" }}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          setTodos([
            ...todos,
            {
              title: input,
              done: false,
              index: todos.length,
            },
          ]);
          setInput("");
        }}
      >
        {" "}
        Add Todos
      </button>
      {todos.map((todo, index) => (
        <ListOfTodo
          key={index}
          title={todo.title}
          done={todo.done}
          index={todo.index}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Todos;
