import { ThemeContextType } from "./ThemeContext";
import ThemeContext from "./ThemeContext";
import { useContext, useState } from "react";

interface TodoListProps {
  title: string;
  done: boolean;
  index: number;
  handleDelete: (id: number) => void;
}

const ListOfTodo = ({ title, done, index, handleDelete }: TodoListProps) => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <div className={theme ? "todos-items_light" : "todos-items_dark"}>
      <div>
        {title}
        <button
          className="btn btn-danger"
          style={{ padding: "10px", margin: "20px", display: "inline-block" }}
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListOfTodo;
