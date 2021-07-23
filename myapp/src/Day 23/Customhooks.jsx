import useTheme from "./useTheme";
import "./dark.css";
import { useState } from "react";

const Customhooks = () => {
  const [mode, handleMode, theme] = useTheme();

  return (
    <div
      id="container"
      style={{
        background: mode === "dark" ? "#000" : "#fff",
        color: mode === "dark" ? "#fff" : "#000",
      }}
    >
      <button type="button" onClick={handleMode}>
        {theme}
      </button>
      <h2>This is an example to theme switcher</h2>
    </div>
  );
};

export default Customhooks;
