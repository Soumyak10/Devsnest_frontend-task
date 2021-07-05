("use strict");
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return "Using React for the first tym!!!!";
    }

    return e(
      "button", //  the element we want to render
      { onClick: () => this.setState({ clicked: true }) }, // the function or event
      "Click me! " // the inner text
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
