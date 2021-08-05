import UseTheme from "./UseTheme";
import "./dark.css";

const Customhooks = () => {
  const [mode, handleMode, theme] = UseTheme();

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
