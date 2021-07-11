import React from "react";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return <button onClick={this.handleCount}>{this.state.count}</button>;
  }
}

export default Button;
