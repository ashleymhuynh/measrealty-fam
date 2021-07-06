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
          {this.state.count} {"-"} WOOTs!!! 🥳
        </button>
      </div>
    );
  }
}

export default Like;
