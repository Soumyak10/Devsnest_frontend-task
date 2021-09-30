import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";
import "./style.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <div className="place-btn">
      <button
        className={theme ? "btn btn-light" : "btn btn-dark "}
        onClick={() => {
          setTheme(!theme);
        }}
      >
        {theme ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ThemeToggle;
