import { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import Todos from "./Todos";

interface TodoType {
  title: string;
  done: boolean;
  index: number;
}

const TodoList = () => {
  const [theme, setTheme] = useState<boolean>(false);
  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="todos">
          <Todos />
        </div>
        <ThemeToggle />
      </ThemeContext.Provider>
    </div>
  );
};

export default TodoList;
