import { useEffect, useState } from "react";
import "./dark.css";

export default () => {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState("Light mode");

  let handleMode = () => {
    if (mode === "light") {
      window.localStorage.setItem("mode", "dark");
      setMode("dark");
      setTheme("Light Mode");
    } else {
      window.localStorage.setItem("mode", "light");
      setMode("light");
      setTheme("Dark Mode");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("mode");
    if (localTheme) {
      setMode(localTheme);
    }
  }, []);

  return [mode, handleMode, theme];
};
