import { Component } from "react";
import "./Like.css";

class Like extends Component {
  constructor() {
    super();
    this.state = {
      count: 20,
    };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button id="like-button" onClick={() => this.increment()}>
          WOOT!!! 🥳
        </button>
        <h5 id="like-count">
          {this.state.count} people like this win! Wohoo!! 🍻
        </h5>
      </div>
    );
  }
}

export default Like;
