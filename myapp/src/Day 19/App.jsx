import React from "react";
import Button from "./Button";

class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", marginTop: "18%", marginLeft: "50%" }}>
        {[1, 2, 3, 4].map((ele, index) => (
          <div key={index}>
            <Button />
          </div>
        ))}
      </div>
    );
  }
}
export default App;
